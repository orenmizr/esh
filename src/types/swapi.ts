export type SWAPICategory = 'people' | 'planets' | 'starships' | 'vehicles' | 'species' | 'films';

export interface SWPerson {
  id?: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export interface SWAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface SWPlanet {
  id?: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export interface SWFilm {
  id?: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export interface SWStarship {
  id?: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  starship_class: string;
}

export type SWAPIResource = SWPerson | SWPlanet | SWFilm | SWStarship;

export interface CategorySearchResult {
  category: SWAPICategory;
  results: SWAPIResource[];
}