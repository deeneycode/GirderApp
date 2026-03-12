
import { Ruler, Activity } from 'lucide-react';

export function InputPanel({ girder, setGirder, loads, setLoads }: any) {
  const updateGirder = (key: string, val: string) => {
    setGirder({ ...girder, [key]: Number(val) || 0 });
  };

  const addPointLoad = () => {
    setLoads([...loads, { id: Date.now().toString(), type: 'Point', force: 100, start: girder.span / 2 }]);
  };

  const removeLoad = (i: number) => {
    setLoads(loads.filter((_: any, idx: number) => idx !== i));
  };

  return (
    <>
      <div className="section">
        <h2 className="flex-row mb-4"><Ruler size={20} /> Girder Geometry</h2>
        <div className="grid grid-2">
          <div className="input-group">
            <label>Span (mm)</label>
            <input type="number" value={girder.span} onChange={e => updateGirder('span', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Yield, py (N/mm²)</label>
            <input type="number" value={girder.py} onChange={e => updateGirder('py', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Flange Width (B)</label>
            <input type="number" value={girder.flangeWidth} onChange={e => updateGirder('flangeWidth', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Flange Thick (T)</label>
            <input type="number" value={girder.flangeThickness} onChange={e => updateGirder('flangeThickness', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Web Depth (d)</label>
            <input type="number" value={girder.webDepth} onChange={e => updateGirder('webDepth', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Web Thick (t)</label>
            <input type="number" value={girder.webThickness} onChange={e => updateGirder('webThickness', e.target.value)} />
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2 className="flex-row mb-4"><Activity size={20} /> Loads</h2>
        {loads.map((load: any, i: number) => (
          <div key={i} className="card mb-2" style={{ padding: '1rem' }}>
            <div className="flex-between mb-2">
              <span style={{ fontWeight: 600 }}>{load.type} Load</span>
              <button 
                onClick={() => removeLoad(i)}
                style={{ padding: '0.2rem 0.5rem', background: 'transparent', color: 'var(--danger)', border: '1px solid var(--danger)' }}>
                X
              </button>
            </div>
            <div className="grid grid-2">
              <div className="input-group">
                <label>Force {load.type === 'UDL' ? '(kN/m)' : '(kN)'}</label>
                <input type="number" value={load.force} onChange={e => {
                  const newLoads = [...loads]; newLoads[i].force = Number(e.target.value); setLoads(newLoads);
                }} />
              </div>
              <div className="input-group">
                <label>Start Pos (mm)</label>
                <input type="number" value={load.start} onChange={e => {
                   const newLoads = [...loads]; newLoads[i].start = Number(e.target.value); setLoads(newLoads);
                }} />
              </div>
            </div>
          </div>
        ))}
        <button onClick={addPointLoad} style={{ width: '100%', marginTop: '1rem', background: 'var(--border)' }}>+ Add Point Load</button>
      </div>
    </>
  );
}
