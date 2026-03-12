export interface Girder {
  span: number; // mm
  flangeWidth: number; // B (mm)
  flangeThickness: number; // T (mm)
  webDepth: number; // d (mm)
  webThickness: number; // t (mm)
  py: number; // N/mm2
}

export interface Load {
  id: string;
  type: 'Point' | 'UDL';
  force: number; // kN (for point) or kN/m (for UDL)
  start: number; // mm (for both point position and UDL start)
  end?: number; // mm (optional for UDL end, defaults to span if UDL)
}

export function analyzeBeam(span: number, loads: Load[]) {
  let reactionA = 0; // x = 0
  let reactionB = 0; // x = span
  
  loads.forEach(load => {
    if (load.type === 'Point') {
      const pos = load.start;
      const rB = (load.force * pos) / span;
      reactionB += rB;
      reactionA += (load.force - rB);
    } else if (load.type === 'UDL') {
      const s = load.start;
      const e = load.end ?? span;
      const len = e - s;
      const totalForce = load.force * (len / 1000);
      const centroid = s + len / 2;
      const rB = (totalForce * centroid) / span;
      reactionB += rB;
      reactionA += (totalForce - rB);
    }
  });

  const numPoints = 100;
  const V: {x: number, v: number}[] = [];
  const M: {x: number, m: number}[] = [];
  let maxV = Math.abs(reactionA); // start with max reaction A
  let maxM = 0;

  for (let i = 0; i <= numPoints; i++) {
    const x = (i / numPoints) * span;
    let currV = reactionA;
    let currM = reactionA * (x / 1000); // kNm
    
    loads.forEach(load => {
      if (load.type === 'Point') {
        if (x > load.start) {
          currV -= load.force;
          currM -= load.force * ((x - load.start) / 1000);
        }
      } else if (load.type === 'UDL') {
        const s = load.start;
        const e = load.end ?? span;
        if (x > s) {
          const loadDist = Math.min(x - s, e - s);
          const forceSub = load.force * (loadDist / 1000);
          currV -= forceSub;
          currM -= forceSub * ((loadDist / 2) / 1000);
        }
      }
    });

    V.push({ x, v: currV });
    M.push({ x, m: currM });
    if (Math.abs(currV) > maxV) maxV = Math.abs(currV);
    if (currM > maxM) maxM = currM;
  }

  // Double check end reaction
  if (Math.abs(reactionB) > maxV) maxV = Math.abs(reactionB);

  return { V, M, maxV, maxM, reactionA, reactionB };
}

export function calculateSectionClass(g: Girder): number {
  const epsilon = Math.sqrt(275 / g.py);
  const outstand = (g.flangeWidth - g.webThickness) / 2;
  const btRatio = outstand / g.flangeThickness;
  
  const d_t_Ratio = g.webDepth / g.webThickness;
  
  if (btRatio <= 8.5 * epsilon && d_t_Ratio <= 79 * epsilon) return 1;
  if (btRatio <= 9.5 * epsilon && d_t_Ratio <= 98 * epsilon) return 2;
  if (btRatio <= 14.5 * epsilon && d_t_Ratio <= 114 * epsilon) return 3;
  return 4; // Slender
}

export function checkMomentCapacity(g: Girder, maxM: number) {
  const Af = g.flangeWidth * g.flangeThickness;
  const Df = g.webDepth + g.flangeThickness;
  
  const Zp = (Af * Df) + (g.webThickness * Math.pow(g.webDepth, 2) / 4);
  const Mcs = (g.py * Zp) / 1e6; // kNm
  
  const status = Mcs >= maxM ? 'PASS' : 'FAIL';
  return { Mcs, capacityRatio: maxM / Mcs, status, Zp };
}

export function checkShearCapacity(g: Girder, maxV: number) {
  const Aw = g.webDepth * g.webThickness;
  const pv = 0.6 * g.py;
  const Pv = (pv * Aw) / 1000; // kN
  
  const status = Pv >= maxV ? 'PASS' : 'FAIL';
  return { Pv, capacityRatio: maxV / Pv, status };
}

export function checkWebBuckling(g: Girder, spacingA: number) {
  const E = 205000; 
  const d_t = g.webDepth / g.webThickness;
  const a_d = spacingA / g.webDepth;
  
  let factor = 2.75 + 2 / Math.pow(a_d, 2);
  let denom = Math.pow(d_t, 2);
  const p_vw = E * factor / denom; 
  
  return { Pvw: p_vw, E, a_d, d_t };
}
