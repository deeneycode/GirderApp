import { useState } from 'react';
import { Activity } from 'lucide-react';
import { LandingPage } from './components/LandingPage';
import { calculateSectionClass, analyzeBeam, checkMomentCapacity, checkShearCapacity, checkWebBuckling, Load } from './lib/engine';
import { DiagramEngine } from './components/DiagramEngine';
import { InputPanel } from './components/InputPanel';
import { ResultsPanel } from './components/ResultsPanel';

export default function App() {
  const [started, setStarted] = useState(false);
  const [girder, setGirder] = useState({
    span: 25000,
    flangeWidth: 700,
    flangeThickness: 40,
    webDepth: 1950,
    webThickness: 13,
    py: 275 // grade S275
  });

  const [loads, setLoads] = useState<Load[]>([
    { id: 'udl1', type: 'UDL', force: 92, start: 0, end: 25000 }
  ]);
  
  const beamResults = analyzeBeam(girder.span, loads);
  const sectionClass = calculateSectionClass(girder);
  const momentCheck = checkMomentCapacity(girder, beamResults.maxM);
  const shearCheck = checkShearCapacity(girder, beamResults.maxV);
  const bucklingCheck = checkWebBuckling(girder, 3500); // spacing 3500mm

  if (!started) return <LandingPage onStart={() => setStarted(true)} />;

  return (
    <div className="app-container">
      <div className="sidebar">
        <InputPanel girder={girder} setGirder={setGirder} loads={loads} setLoads={setLoads} />
      </div>
      <div className="main-content">
        <header className="flex-row">
          <Activity size={32} color="var(--primary)" />
          <h1>Simply Supported Plate Girder</h1>
        </header>
        <DiagramEngine beam={beamResults} />
        <ResultsPanel 
          beam={beamResults} 
          sectionClass={sectionClass} 
          momentCheck={momentCheck}
          shearCheck={shearCheck}
          bucklingCheck={bucklingCheck}
        />
      </div>
    </div>
  );
}
