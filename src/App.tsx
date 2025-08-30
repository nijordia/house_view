import React, { useState, useEffect } from 'react';
import ProjectLanding from './components/ProjectLanding';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import HousingMap from './components/HousingMap';
import MarketInsights from './components/MarketInsights';
import { housingDataService } from './services/housingDataService';
import { HousingStats } from './types';
import './styles/styles.css';

function App() {
  const [allStats, setAllStats] = useState<HousingStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        await housingDataService.loadData();
        // Load a sample of stats for insights
        const statsPromises = ['ciutat-vella', 'eixample', 'gracia', 'sarria-sant-gervasi'].map(
          commune => housingDataService.getStatsByCommune(commune, 'vivienda', 'compra')
        );
        const stats = await Promise.all(statsPromises);
        setAllStats(stats.filter(Boolean) as HousingStats[]);
      } catch (error) {
        console.error('Failed to load housing data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-300 font-geologica">Loading market intelligence...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <ProjectLanding />
      <HousingMap />
      <MarketInsights allStats={allStats} />
      <TechnicalArchitecture />
      
    </div>
  );
}

export default App;