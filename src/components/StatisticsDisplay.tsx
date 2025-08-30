import React from 'react';
import { HousingStats } from '../types';
import { getMedianPrice, getMeanPrice, getPriceLabel, getPriceUnit } from '../utils/priceUtils';

interface StatisticsDisplayProps {
    stats: HousingStats;
}

export const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({ stats }) => {
    return (
        <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl">
                    <span className="text-neutral-300 font-geologica">Median {getPriceLabel(stats.operation)}:</span>
                    <span className="font-bold text-cyan-200 font-geologica text-lg">
                        {getPriceUnit(stats.operation)}{Math.round(getMedianPrice(stats)).toLocaleString('en-US')}
                    </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-xl">
                    <span className="text-neutral-300 font-geologica">Mean {getPriceLabel(stats.operation)}:</span>
                    <span className="font-bold text-teal-200 font-geologica text-lg">
                        {getPriceUnit(stats.operation)}{Math.round(getMeanPrice(stats)).toLocaleString('en-US')}
                    </span>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl">
                    <span className="text-neutral-300 font-geologica">Properties Analyzed:</span>
                    <span className="font-bold text-emerald-200 font-geologica text-lg">
                        {stats.num_observations.toLocaleString('en-US')}
                    </span>
                </div>
                {stats.operation !== 'alquiler_habitacion' && stats.avg_square_m && (
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
                        <span className="text-neutral-300 font-geologica">Average Size:</span>
                        <span className="font-bold text-blue-200 font-geologica text-lg">
                            {Math.round(stats.avg_square_m)} m²
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};