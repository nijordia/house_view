import React, { useState, useEffect } from 'react';
import { housingDataService } from '../services/housingDataService';
import { HousingStats } from '../types';
import { 
    DISTRICT_PATHS, 
    DISTRICT_LABELS, 
    SVG_TO_DATA_COMMUNE
} from '../../lib/assets/map';
import { getPriceColor } from '../utils/priceUtils';
import { CavernMapWrapper } from './CavernMapWrapper';
import { FilterControls } from './FilterControls';
import { DistrictInfoModal } from './DistrictInfoModal';

export default function HousingMap() {
    const [stats, setStats] = useState<HousingStats | null>(null);
    const [allStats, setAllStats] = useState<HousingStats[]>([]);
    const [showOverlay, setShowOverlay] = useState(true);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [searchType, setSearchType] = useState<string>('vivienda');
    const [operation, setOperation] = useState<string>('compra');
    const [loading, setLoading] = useState(false);
    const [latestDataDate, setLatestDataDate] = useState<string | null>(null);

    // Function to get the most recent date from all data
    const getLatestDataDate = (allData: HousingStats[]) => {
        if (allData.length === 0) return null;
        
        const dates = allData.map(stat => new Date(stat.date));
        const latestDate = new Date(Math.max(...dates.map(date => date.getTime())));
        
        return latestDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };


    const handleDistrictClick = async (e: React.MouseEvent<SVGPathElement>) => {
        e.stopPropagation(); // Prevent event bubbling to the SVG click handler
        const label = e.currentTarget.getAttribute('data-label');
        if (!label) return;

        const communeId = SVG_TO_DATA_COMMUNE[label];

        console.log('District clicked:', label, 'Commune ID:', communeId); // Debug log

        setSelectedDistrict(label);
        setShowOverlay(false); // Hide overlay when a district is clicked
        setLoading(true);
        setStats(null); // Clear previous stats immediately

        if (communeId) {
            try {
                const data = await housingDataService.getStatsByCommune(communeId, searchType, operation);
                console.log('Data loaded for district:', label, data); // Debug log
                setStats(data);
            } catch (error) {
                console.error('Failed to load district data:', error);
                setStats(null);
            } finally {
                setLoading(false);
            }
        } else {
            setStats(null);
            setLoading(false);
        }
    };

    const handleMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
        // Only handle clicks on the SVG background, not on districts
        if (e.target === e.currentTarget) {
            setShowOverlay(false); // Hide overlay on map background click
            setSelectedDistrict(null); // Clear selected district
            setStats(null); // Clear stats
        }
    };

    const handleClose = () => {
        setShowOverlay(true); // Show overlay when card is reset
        setStats(null);
        setSelectedDistrict(null);
        setLoading(false);
    };

    useEffect(() => {
        const loadAllStats = async () => {
            await housingDataService.loadData();
            const allData: HousingStats[] = [];
            for (const commune of Object.values(SVG_TO_DATA_COMMUNE)) {
                const data = await housingDataService.getStatsByCommune(commune, searchType, operation);
                if (data) allData.push(data);
            }
            setAllStats(allData);
        };
        loadAllStats();
    }, [searchType, operation]);

    useEffect(() => {
        if (selectedDistrict) {
            const communeId = SVG_TO_DATA_COMMUNE[selectedDistrict];
            if (communeId) {
                setLoading(true);
                setStats(null); // Clear stats immediately
                housingDataService.getStatsByCommune(communeId, searchType, operation)
                    .then(data => {
                        setStats(data);
                        setLoading(false);
                    })
                    .catch(() => {
                        setStats(null);
                        setLoading(false);
                    });
            }
        }
    }, [searchType, operation, selectedDistrict]);

    useEffect(() => {
        const loadAllStats = async () => {
            await housingDataService.loadData();
            const allData: HousingStats[] = [];
            for (const commune of Object.values(SVG_TO_DATA_COMMUNE)) {
                const data = await housingDataService.getStatsByCommune(commune, searchType, operation);
                if (data) allData.push(data);
            }
            setAllStats(allData);
            
            // Update the latest data date
            const latestDate = getLatestDataDate(allData);
            setLatestDataDate(latestDate);
        };
        loadAllStats();
    }, [searchType, operation]);

    console.log('HousingMap render state:', { 
        selectedDistrict, 
        stats: !!stats, 
        loading, 
        showPrompt: !selectedDistrict && !loading 
    });

    return (
        <CavernMapWrapper>
            <section id="interactive-map" className="mb-5">
                <div className="text-center mb-12">
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-geologica mb-8">
                        Navigate Barcelona's property market. Each district reveals its own pricing patterns and market characteristics.
                    </p>
                </div>

                {/* Filter Controls - Above everything */}
                <div className="w-full max-w-7xl mx-auto mb-8">
                    <FilterControls
                        searchType={searchType}
                        operation={operation}
                        onSearchTypeChange={setSearchType}
                        onOperationChange={setOperation}
                    />
                </div>

                {/* MAIN CONTENT AREA WITH MAP AND CARD */}
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid transition-all duration-500 ease-in-out gap-8 lg:grid-cols-[1fr,500px]">
                        {/* MAP CONTAINER */}
                        <div className="flex justify-center transition-all duration-500 relative">
                            <div className="relative w-full max-w-4xl">
                                <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-neutral-700/30 rounded-2xl p-6 shadow-inner">
                                    <svg
                                        width="100%"
                                        height="600"
                                        viewBox="0 0 1000 1000"
                                        className="w-full max-w-none"
                                        onClick={handleMapClick} // Handle clicks on map background
                                    >
                                        {DISTRICT_PATHS.map(({ label, d }) => (
                                            <path
                                                key={label}
                                                className={`district transition-all duration-300 hover:drop-shadow-lg ${
                                                    selectedDistrict === label 
                                                        ? 'stroke-cyan-300 stroke-[4] drop-shadow-lg' 
                                                        : 'stroke-neutral-600 stroke-[2] hover:stroke-cyan-400'
                                                }`}
                                                data-label={label}
                                                d={d}
                                                onClick={handleDistrictClick} // Handle district clicks
                                                style={{
                                                    cursor: 'pointer',
                                                    fill: getPriceColor(SVG_TO_DATA_COMMUNE[label], allStats),
                                                    opacity: selectedDistrict && selectedDistrict !== label ? 0.6 : 1,
                                                    transition: 'all 0.3s ease',
                                                    filter: selectedDistrict === label 
                                                        ? 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.4))' 
                                                        : 'none'
                                                }}
                                            />
                                        ))}
                                        {DISTRICT_LABELS.map(({ label, x, y }) => (
                                            <text
                                                className="pointer-events-none select-none font-geologica"
                                                x={x}
                                                y={y}
                                                key={label}
                                                style={{
                                                    fontWeight: '600',
                                                    fontSize: selectedDistrict === label ? '18px' : '16px',
                                                    fill: selectedDistrict === label ? '#22d3ee' : '#e2e8f0',
                                                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                                                    textAnchor: 'middle',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {label}
                                            </text>
                                        ))}
                                    </svg>

                                    {/* Transparent overlay with prompt - only show when NO district is selected and showOverlay is true */}
                                    {!selectedDistrict && showOverlay && (
                                        <div
                                            className="absolute inset-0 bg-black/25 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10 transition-all duration-300"
                                            onClick={() => setShowOverlay(false)} // Hide overlay on click
                                        >
                                            <div
                                                className="text-center p-8 bg-gradient-to-br from-neutral-900/85 to-black/85 border border-cyan-500/30 rounded-xl backdrop-blur-md shadow-2xl cursor-pointer"
                                                onClick={() => setShowOverlay(false)} // Also hide overlay when clicking the prompt box
                                            >
                                                <div className="text-4xl mb-4 animate-pulse">🖱️</div>
                                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 font-geologica mb-3">
                                                    Click Any District
                                                </h3>
                                                <p className="text-neutral-300 font-geologica text-sm">
                                                    Discover housing market insights
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                        <div className="mt-4 flex justify-center">
                            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-neutral-700/30 rounded-xl p-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-neutral-300 font-geologica">Price Intensity:</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-neutral-400 font-geologica">Low</span>
                                        <div className="flex h-4 rounded overflow-hidden shadow-inner">
                                            <div className="w-5 h-4" style={{ backgroundColor: '#99f6e4' }} title="Lowest prices (0-20%)"></div>
                                            <div className="w-5 h-4" style={{ backgroundColor: '#5eead4' }} title="Low prices (20-40%)"></div>
                                            <div className="w-5 h-4" style={{ backgroundColor: '#2dd4bf' }} title="Below average (40-60%)"></div>
                                            <div className="w-5 h-4" style={{ backgroundColor: '#14b8a6' }} title="Above average (60-80%)"></div>
                                            <div className="w-5 h-4" style={{ backgroundColor: '#0f766e' }} title="Highest prices (80-100%)"></div>
                                        </div>
                                        <span className="text-xs text-neutral-400 font-geologica">High</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>

                        {/* STATISTICS CARD - Always visible */}
                        <div className="transition-all duration-500 ease-in-out">
                            <div className="sticky top-8">
                                <DistrictInfoModal
                                    stats={stats}
                                    loading={loading}
                                    onClose={handleClose}
                                    showPrompt={!selectedDistrict && !loading}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Mobile Statistics Card - Always visible on smaller screens */}
                    <div className="lg:hidden w-full max-w-3xl mx-auto mt-8">
                        <DistrictInfoModal
                            stats={stats}
                            loading={loading}
                            onClose={handleClose}
                            showPrompt={!selectedDistrict && !loading}
                        />
                    </div>

                {/* Data Source Attribution */}
                <div className="text-center mt-12 pt-8 border-t border-neutral-800/50">
                    <p className="text-sm text-neutral-500 font-geologica">
                        Data sourced from{' '}
                        <a 
                            href="https://www.idealista.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline decoration-dotted underline-offset-4"
                        >
                            Idealista
                        </a>
                        {latestDataDate ? (
                            <span> • Latest data: {latestDataDate}</span>
                        ) : (
                            <span> • Loading data freshness...</span>
                        )}
                    </p>
                </div>
                </div>
            </section>
        </CavernMapWrapper>
    );
}