:root {
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --primary: #3b82f6;
  --primary-hover: #60a5fa;
  --danger: #ef4444;
  --success: #10b981;
  --accent: #2dd4bf;
  --warning: #f59e0b;
  
  --glass-bg: rgba(15, 23, 42, 0.45);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-card: rgba(30, 41, 59, 0.55);
  --glass-input: rgba(15, 23, 42, 0.6);
  
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: dark;
  color: var(--text);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #050b14;
}

#root { width: 100%; display: flex; flex-direction: column; }
h1, h2, h3, h4, h5, h6 { margin: 0; font-weight: 600; letter-spacing: -0.02em; }

/* Utilities */
.glass {
  background: var(--glass-card);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}
.text-primary { color: var(--primary); }
.text-accent { color: var(--accent); }
.text-success { color: var(--success); }
.text-warning { color: var(--warning); }
.text-muted { color: var(--text-muted); }
.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; justify-content: space-between; align-items: center; }
.flex-row { display: flex; gap: 0.75rem; align-items: center; }
.text-center { text-align: center; }

/* Buttons */
button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
}
button:hover { 
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}
button:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
button.btn-secondary {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--glass-border);
  box-shadow: none;
}
button.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
}
button.btn-primary.btn-large {
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
}

/* Typography Enhancements */
.text-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #2dd4bf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* Landing Page Layout */
.landing-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(circle at center top, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.8) 100%);
}
.landing-top-bar {
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 12px;
  animation: slideDown 0.6s ease forwards;
}
.landing-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.hero-section {
  max-width: 800px;
  margin-bottom: 4rem;
  animation: fadeUp 0.8s ease backwards;
  animation-delay: 0.2s;
}
.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.6;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  animation: fadeUp 0.9s ease backwards;
  animation-delay: 0.4s;
}
.feature-card {
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  transition: all 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  border-color: rgba(255,255,255,0.4);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}
.feature-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.primary-bg { background: rgba(59, 130, 246, 0.15); color: var(--primary); }
.accent-bg { background: rgba(45, 212, 191, 0.15); color: var(--accent); }
.success-bg { background: rgba(16, 185, 129, 0.15); color: var(--success); }
.warning-bg { background: rgba(245, 158, 11, 0.15); color: var(--warning); }
.feature-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; font-weight: 600; }
.feature-card p { font-size: 0.95rem; color: var(--text-muted); line-height: 1.5; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* App Container Layout */
.app-container {
  display: flex;
  min-height: 100vh;
  animation: fadeUp 0.5s ease;
  background: radial-gradient(circle at right center, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.7) 100%);
}
.sidebar {
  width: 380px;
  background: var(--glass-bg);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-right: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 4px 0 24px rgba(0,0,0,0.2);
}
.main-content {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}
.section {
  padding: 1.75rem;
  border-bottom: 1px solid var(--glass-border);
}
.grid { display: grid; gap: 1.25rem; }
.grid-2 { grid-template-columns: 1fr 1fr; gap: 1rem; }

.input-group { display: flex; flex-direction: column; gap: 0.4rem; }
.input-group label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}
.input-group input {
  background: var(--glass-input);
  border: 1px solid var(--glass-border);
  color: var(--text);
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  width: 100%;
  font-family: inherit;
  transition: all 0.2s;
}
.input-group input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.card {
  background: var(--glass-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
}
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1.25rem; }

.badge-pass {
  background: rgba(16, 185, 129, 0.15);
  color: var(--success);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.4);
  font-weight: 600;
  font-size: 0.85rem;
}
.badge-fail {
  background: rgba(239, 68, 68, 0.15);
  color: var(--danger);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(239, 68, 68, 0.4);
  font-weight: 600;
  font-size: 0.85rem;
}

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); }
::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
