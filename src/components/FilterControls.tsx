import React from 'react';

interface FilterControlsProps {
    searchType: string;
    operation: string;
    onSearchTypeChange: (value: string) => void;
    onOperationChange: (value: string) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
    searchType,
    operation,
    onSearchTypeChange,
    onOperationChange
}) => {
    return (
        <div className="flex flex-wrap gap-6 mb-8 items-center justify-center">
            <div className="flex items-center gap-3">
                <label className="text-base font-medium text-cyan-200 font-geologica">
                    🏠 Property Type:
                </label>
                <select
                    value={searchType}
                    onChange={(e) => onSearchTypeChange(e.target.value)}
                    className="px-4 py-2 bg-neutral-900/80 border border-neutral-600 rounded-xl text-neutral-100 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm font-geologica"
                >
                    <option value="vivienda">Residential</option>
                    <option value="comercial">Commercial</option>
                </select>
            </div>
            <div className="flex items-center gap-3">
                <label className="text-base font-medium text-teal-200 font-geologica">
                    💰 Operation:
                </label>
                <select
                    value={operation}
                    onChange={(e) => onOperationChange(e.target.value)}
                    className="px-4 py-2 bg-neutral-900/80 border border-neutral-600 rounded-xl text-neutral-100 text-base focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent backdrop-blur-sm font-geologica"
                >
                    <option value="compra">Purchase</option>
                    <option value="alquiler">Rent</option>
                    {searchType === 'vivienda' && (
                        <option value="alquiler_habitacion">Room Rent</option>
                    )}
                </select>
            </div>
        </div>
    );
};