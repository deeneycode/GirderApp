import { Activity, ArrowRight} from 'lucide-react';

export function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="landing-container">
      <div className="landing-top-bar glass flex-between">
        <div className="flex-row">
          <Activity size={24} className="text-primary" />
          <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>GirderApp</span>
        </div>
        <button className="btn-secondary" onClick={onStart}>
          Dashboard <ArrowRight size={16} />
        </button>
      </div>

      <main className="landing-main">
        <div className="hero-section text-center">
          {/* <div className="badge-pill mb-4 glass flex-row" style={{ display: 'inline-flex', margin: '0 auto', padding: '0.4rem 1rem', borderRadius: '50px' }}>
            <span className="text-accent" style={{ fontWeight: 600 }}>v2.0</span>
            <span style={{ margin: '0 8px', color: 'var(--glass-border)' }}>|</span>
            <span className="text-muted">Now with Premium UI</span>
          </div> */}
          <h1 className="hero-title">
            Simply Supported <br />
            <span className="text-gradient">Plate Girder Analysis</span>
          </h1>
          <p className="hero-subtitle">
            An advanced, real-time structural engineering application designed for exact 
            bending moment and shear force evaluations utilizing BS 5950 frameworks.
          </p>
          <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
            <button className="btn-primary btn-large" onClick={onStart} style={{ margin: '0 auto' }}>
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Start Analysis</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
{/* 
        <div className="features-grid">
          <div className="feature-card glass hover-lift">
            <div className="feature-icon-wrapper primary-bg"><Layers size={24} /></div>
            <h3>Real-time Engine</h3>
            <p>100-segment iteration array for precision mapping.</p>
          </div>
          <div className="feature-card glass hover-lift">
            <div className="feature-icon-wrapper accent-bg"><Maximize size={24} /></div>
            <h3>Geometry Modeling</h3>
            <p>Freely define Web depths, Flanges and Grade Py.</p>
          </div>
          <div className="feature-card glass hover-lift">
            <div className="feature-icon-wrapper success-bg"><ShieldCheck size={24} /></div>
            <h3>UR Design Checks</h3>
            <p>Instant Section Classification and Shear limits.</p>
          </div>
          <div className="feature-card glass hover-lift">
            <div className="feature-icon-wrapper warning-bg"><FileBarChart size={24} /></div>
            <h3>Dynamic Visuals</h3>
            <p>Responsive BMD and SFD charts powered by Recharts.</p>
          </div>
        </div> */}
      </main>
      
      <footer className="landing-footer flex-center" style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Premium Structural Tools.
        </p>
      </footer>
    </div>
  );
}
