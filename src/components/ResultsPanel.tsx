
import { Calculator } from 'lucide-react';

export function ResultsPanel({ beam, sectionClass, momentCheck, shearCheck, bucklingCheck }: any) {
  return (
    <div className="card">
      <h2 className="flex-row mb-4"><Calculator size={24} /> Design Checks</h2>
      <div className="grid grid-2">
        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: 8 }}>
          <div className="flex-between">
            <span style={{ color: 'var(--text-muted)' }}>Section Class</span>
            <span style={{ fontWeight: 600 }}>Class {sectionClass}</span>
          </div>
        </div>
        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: 8 }}>
          <div className="flex-between">
            <span style={{ color: 'var(--text-muted)' }}>Moment Capacity (Mcs)</span>
            <span className={momentCheck.status === 'PASS' ? 'badge-pass' : 'badge-fail'}>
              {momentCheck.capacityRatio.toFixed(2)} UR
            </span>
          </div>
          <div style={{ paddingTop: '0.5rem', fontSize: '0.85rem' }}>
            {momentCheck.Mcs.toFixed(1)} kNm cap vs {beam.maxM.toFixed(1)} kNm applied
          </div>
        </div>
        
        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: 8 }}>
          <div className="flex-between">
            <span style={{ color: 'var(--text-muted)' }}>Shear Capacity (Pv)</span>
            <span className={shearCheck.status === 'PASS' ? 'badge-pass' : 'badge-fail'}>
              {shearCheck.capacityRatio.toFixed(2)} UR
            </span>
          </div>
          <div style={{ paddingTop: '0.5rem', fontSize: '0.85rem' }}>
            {shearCheck.Pv.toFixed(1)} kN cap vs {beam.maxV.toFixed(1)} kN applied
          </div>
        </div>

        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: 8 }}>
          <div className="flex-between">
            <span style={{ color: 'var(--text-muted)' }}>Web Buckling (p_vw)</span>
            <span className="badge-pass">INFO</span>
          </div>
          <div style={{ paddingTop: '0.5rem', fontSize: '0.85rem' }}>
            Base stress limit: {bucklingCheck.Pvw.toFixed(2)} N/mm² (spacing 3.5m)
          </div>
        </div>
      </div>
    </div>
  );
}
