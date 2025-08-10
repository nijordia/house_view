export interface HousingStats {
  date: string;
  commune: string;
  search_type: string;
  operation: string;
  num_observations: number;
  
  // For rental operations (alquiler, alquiler_habitacion)
  min_price?: number;
  q25_price?: number;
  median_price?: number;
  q75_price?: number;
  max_price?: number;
  mean_price?: number;
  std_dev_price?: number;
  
  // For purchase operations (compra)
  min_price_per_sqm?: number;
  q25_price_per_sqm?: number;
  median_price_per_sqm?: number;
  q75_price_per_sqm?: number;
  max_price_per_sqm?: number;
  mean_price_per_sqm?: number;
  std_dev_price_per_sqm?: number;
  
  // Common fields
  avg_square_m?: number | null;
  mode_floor?: number | null;
  num_elevator_0: number;
  num_elevator_1: number;
}

export interface Polygon {
    id: string;
    coordinates: number[][];
    commune: string;
}