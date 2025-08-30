import { HousingStats } from '../types';

export const isRentalOperation = (operation: string): boolean => {
    return operation === 'alquiler' || operation === 'alquiler_habitacion';
};

export const getMedianPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation)
        ? stats.median_price!
        : stats.median_price_per_sqm!;
};

export const getMeanPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation)
        ? stats.mean_price!
        : stats.mean_price_per_sqm!;
};

export const getMinPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation)
        ? stats.min_price!
        : stats.min_price_per_sqm!;
};

export const getMaxPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation)
        ? stats.max_price!
        : stats.max_price_per_sqm!;
};

export const getStdDev = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation)
        ? stats.std_dev_price!
        : stats.std_dev_price_per_sqm!;
};

export const getPriceLabel = (operation: string): string => {
    return isRentalOperation(operation) ? 'Price' : 'Price per sqm';
};

export const getPriceUnit = (operation: string): string => {
    return '€';
};

export const getPriceColor = (commune: string, allStats: HousingStats[]): string => {
    const stats = allStats.find(stat => stat.commune === commune);
    if (!stats) return '#1e293b'; // fallback

    const price = getMedianPrice(stats);
    const prices = allStats.map(s => getMedianPrice(s)).filter(p => p > 0);
    if (prices.length === 0) return '#1e293b';

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const relative = (price - minPrice) / (maxPrice - minPrice);

    // Use only teal shades for a smoother gradient
    if (relative < 0.2) return '#99f6e4'; // teal-200
    if (relative < 0.4) return '#5eead4'; // teal-300
    if (relative < 0.6) return '#2dd4bf'; // teal-400
    if (relative < 0.8) return '#14b8a6'; // teal-500
    return '#0f766e'; // teal-600
};
