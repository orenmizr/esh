export type Category = 'people' | 'planets' | 'starships' | 'vehicles' | 'species';

export interface SearchResultItem {
  name?: string;
  title?: string;
  url: string;
  [key: string]: unknown;
}

export interface CategoryResults {
  category: Category;
  results: SearchResultItem[];
}

export interface SearchResponse {
  loading: boolean;
  error: string | null;
  searchResults: CategoryResults[] | null;
}

export interface BaseItem {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface DialogProps<T extends BaseItem> {
  item: T;
}