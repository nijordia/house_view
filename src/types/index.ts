export interface HousingStats {
    id: string;
    commune: string;
    averagePrice: number;
    priceChangePercentage: number;
    numberOfSales: number;
    date: string;
}

export interface Polygon {
    id: string;
    coordinates: number[][];
    commune: string;
}