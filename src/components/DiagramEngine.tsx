
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function DiagramEngine({ beam }: { beam: any }) {
  const formatX = (x: number) => (x / 1000).toFixed(1) + 'm';
  return (
    <div className="grid">
      <div className="card">
        <h3 className="mb-4">Bending Moment Diagram (kNm)</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={beam.M}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="x" tickFormatter={formatX} />
              <YAxis />
              <Tooltip labelFormatter={formatX} />
              <Line type="monotone" dataKey="m" stroke="var(--primary)" strokeWidth={2} dot={false} fill="rgba(59, 130, 246, 0.2)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-between" style={{ marginTop: '1rem' }}>
          <span>Max Moment: <strong style={{ color: 'var(--primary)' }}>{beam.maxM.toFixed(1)} kNm</strong></span>
        </div>
      </div>
      <div className="card">
        <h3 className="mb-4">Shear Force Diagram (kN)</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={beam.V}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="x" tickFormatter={formatX} />
              <YAxis />
              <Tooltip labelFormatter={formatX} />
              <Line type="stepAfter" dataKey="v" stroke="var(--success)" strokeWidth={2} dot={false} fill="rgba(34, 197, 94, 0.2)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-between" style={{ marginTop: '1rem' }}>
          <span>Max Shear / Reactions: <strong style={{ color: 'var(--success)' }}>{beam.maxV.toFixed(1)} kN</strong></span>
        </div>
      </div>
    </div>
  );
}
