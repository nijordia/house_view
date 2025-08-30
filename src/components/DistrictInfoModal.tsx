import React from 'react';
import { HousingStats } from '../types';
import { StatisticsDisplay } from './StatisticsDisplay';
import { PriceDistributionChart } from './PriceDistributionChart';

interface DistrictInfoModalProps {
    stats: HousingStats | null;
    loading: boolean;
    onClose: () => void;
    showPrompt?: boolean;
}

export const DistrictInfoModal: React.FC<DistrictInfoModalProps> = ({ 
    stats, 
    loading, 
    onClose, 
    showPrompt = false 
}) => {
    // Add debugging to see what's happening
    console.log('DistrictInfoModal render:', { 
        stats: !!stats, 
        loading, 
        showPrompt,
        statsData: stats ? `${stats.commune} - ${stats.operation}` : 'null'
    });

    // Priority 1: If we're loading, always show loading state regardless of other conditions
    if (loading) {
        return (
            <div className="relative bg-gradient-to-br from-neutral-900/95 via-black/95 to-neutral-950/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 w-full backdrop-blur-md">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-cyan-300 bg-neutral-800/60 hover:bg-neutral-700/80 rounded-full p-2 transition-all duration-200 text-lg leading-none z-10"
                    aria-label="Close"
                >
                    ✕
                </button>
                <div className="text-center py-12">
                    <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-cyan-300 font-geologica">Loading district data...</p>
                </div>
            </div>
        );
    }

    // Priority 2: If we have stats, show them regardless of showPrompt
    if (stats) {
        return (
            <div className="relative bg-gradient-to-br from-neutral-900/95 via-black/95 to-neutral-950/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 w-full backdrop-blur-md">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-cyan-300 bg-neutral-800/60 hover:bg-neutral-700/80 rounded-full p-2 transition-all duration-200 text-lg leading-none z-10"
                    aria-label="Close"
                >
                    ✕
                </button>

                <div className="space-y-6">
                    {/* Header */}
                    <div className="pr-8">
                        <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 font-geologica">
                            {stats.commune.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </h2>
                        <div className="flex items-center gap-3 text-xs text-neutral-400 font-geologica flex-wrap">
                            <span>📅 {new Date(stats.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>
                                {stats.search_type === 'vivienda' ? '🏠 Residential' : '🏢 Commercial'}
                            </span>
                            <span>•</span>
                            <span>
                                {stats.operation === 'compra' ? '💰 Purchase' :
                                    stats.operation === 'alquiler' ? '🏠 Rent' : '🛏️ Room Rent'}
                            </span>
                        </div>
                    </div>

                    <StatisticsDisplay stats={stats} />
                    <PriceDistributionChart stats={stats} loading={false} />
                </div>
            </div>
        );
    }

    // Priority 3: If showPrompt is true (no district selected), render the selection prompt
    if (showPrompt) {
        return (
            <div className="relative bg-gradient-to-br from-neutral-900/95 via-black/95 to-neutral-950/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-8 w-full backdrop-blur-md">
                <div className="text-center py-12">
                    <div className="text-6xl mb-6 animate-bounce">🗺️</div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 font-geologica mb-4">
                        Explore Barcelona's Districts
                    </h3>
                    <p className="text-neutral-300 font-geologica text-lg mb-6 max-w-md mx-auto">
                        Click on any district on the map to discover detailed housing market statistics and price analysis.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-400 font-geologica">
                        <span>👈</span>
                        <span>Select a district to get started</span>
                    </div>
                </div>
            </div>
        );
    }

    // Priority 4: Fallback - No data available (only when not loading, no stats, and not showing prompt)
    return (
        <div className="relative bg-gradient-to-br from-neutral-900/95 via-black/95 to-neutral-950/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 w-full backdrop-blur-md">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-cyan-300 bg-neutral-800/60 hover:bg-neutral-700/80 rounded-full p-2 transition-all duration-200 text-lg leading-none z-10"
                aria-label="Close"
            >
                ✕
            </button>
            <div className="text-center py-12">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-neutral-200 font-geologica mb-2">No Data Available</h3>
                <p className="text-neutral-400 font-geologica">This district doesn't have data for the selected criteria.</p>
            </div>
        </div>
    );
};