export interface Beer {
  id: number;
  name: string;
  description: string;
  brewery: string;
  image: string;
  abv: number;
  ibu: number;
  og: number;
  fg: number;
  ebc: number;
  srm: number;
  hop_type: string;
  bitterness_level: string;
  color: string;
  availability: string;
  price: number;
  rating: number;
  created_at: string;
  updated_at: string;
}

export type BeerList = Beer[];
