import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist-min';
import { HousingStats } from '../types';
import { getMeanPrice, getStdDev, getMinPrice, getMaxPrice, getPriceUnit, getPriceLabel } from '../utils/priceUtils';

interface PriceDistributionChartProps {
    stats: HousingStats;
    loading: boolean;
}

export const PriceDistributionChart: React.FC<PriceDistributionChartProps> = ({ stats, loading }) => {
    const plotRef = useRef<HTMLDivElement>(null);

    const renderNormalCurve = (stats: HousingStats, container: HTMLDivElement) => {
        const mean = getMeanPrice(stats);
        const sd = getStdDev(stats);
        const min = getMinPrice(stats);
        const max = getMaxPrice(stats);

        const numPoints = 100;
        const binWidth = (max - min) / 20;

        const x: number[] = [];
        const y: number[] = [];

        for (let i = 0; i <= numPoints; i++) {
            const val = min + (i / numPoints) * (max - min);
            x.push(val);
            const pdf = Math.exp(-0.5 * Math.pow((val - mean) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI));
            const estimatedCount = pdf * stats.num_observations * binWidth;
            y.push(estimatedCount);
        }

        const priceUnit = getPriceUnit(stats.operation);

        Plotly.newPlot(container, [{
            x,
            y,
            type: 'scatter',
            mode: 'lines',
            line: { color: 'rgba(34,211,238,0.9)', width: 3 },
            fill: 'tozeroy',
            fillcolor: 'rgba(34,211,238,0.15)',
            hovertemplate: `${priceUnit}: %{x:,.0f}<br>Estimated Count: %{y:.1f}<extra></extra>`,
            name: 'Price Distribution'
        }], {
            margin: { t: 30, b: 50, l: 60, r: 30 },
            xaxis: {
                title: { 
                    text: `${getPriceLabel(stats.operation)} (${priceUnit})`, 
                    font: { family: 'Inter', size: 12, color: '#22d3ee' } 
                },
                showgrid: true,
                gridcolor: '#334155',
                gridwidth: 1,
                tickformat: ',d',
                tickfont: { family: 'Inter', size: 10, color: '#94a3b8' },
                fixedrange: true,
                linecolor: '#475569'
            },
            yaxis: {
                title: { 
                    text: 'Estimated Listings', 
                    font: { family: 'Inter', size: 12, color: '#22d3ee' } 
                },
                showticklabels: true,
                showgrid: true,
                gridcolor: '#334155',
                gridwidth: 1,
                tickformat: ',.1f',
                tick0: 0,
                dtick: Math.ceil(Math.max(...y) / 5),
                tickfont: { family: 'Inter', size: 10, color: '#94a3b8' },
                fixedrange: true,
                linecolor: '#475569'
            },
            plot_bgcolor: '#0f172a',
            paper_bgcolor: 'transparent',
            height: 220,
            font: { family: 'Inter', color: '#94a3b8' },
            hovermode: 'x unified'
        }, {
            displayModeBar: false,
            responsive: true
        });
    };

    useEffect(() => {
        if (stats && plotRef.current && !loading) {
            setTimeout(() => {
                renderNormalCurve(stats, plotRef.current!);
            }, 100);
        }
    }, [stats, loading]);

    return (
        <div className="bg-slate-900/30 border border-neutral-700/50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-cyan-200 font-geologica mb-3 flex items-center gap-2">
                📊 Price Distribution Analysis
            </h3>
            <div ref={plotRef} className="w-full" />
        </div>
    );
};