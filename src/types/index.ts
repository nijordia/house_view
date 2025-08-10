export interface HousingStats {
  date: string;
  commune: string;
  num_observations: number;
  min_price_per_sqm: number;
  q25_price_per_sqm: number;
  median_price_per_sqm: number;
  q75_price_per_sqm: number;
  max_price_per_sqm: number;
  mean_price_per_sqm: number;
  std_dev_price_per_sqm: number;
  mode_floor: number;
  num_elevator_0: number;
  num_elevator_1: number;
}

export interface Polygon {
    id: string;
    coordinates: number[][];
    commune: string;
}