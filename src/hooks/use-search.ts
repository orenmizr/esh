import { useState, useCallback, useEffect } from 'react';
import { debounce } from '../utils/debounce';
import { SWAPICategory, SWPerson } from '@/types/swapi';

interface CategoryResults {
  category: SWAPICategory;
  results: SWPerson[];
}

export const useSearch = (searchTerm: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<CategoryResults[]>([]);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      if (!term) {
        setSearchResults([]);
        return;
      }
      performSearch(term);
    }, 200),
    []
  );

  // Update search when term changes
  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  const categories: SWAPICategory[] = [
    'people',
    'planets',
    'starships',
    'vehicles',
    'species',
    'films'
  ];

  const fetchCategoryResults = async (category: SWAPICategory, searchTerm: string) => {
    if (!searchTerm) return null;

    try {
      const response = await fetch(`https://swapi.dev/api/${category}/?search=${encodeURIComponent(searchTerm)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        category,
        results: data.results.slice(0, 3) // Limit to 3 results per category
      };
    } catch (err) {
      console.error(`Error searching ${category}:`, err);
      return null;
    }
  };

  const performSearch = async (term: string) => {
    setLoading(true);
    setError(null);

    try {
      const results = await Promise.all(
        categories.map(category => fetchCategoryResults(category, term))
      );

      const filteredResults = results
        .filter((result): result is CategoryResults => result !== null && result.results.length > 0);

      setSearchResults(filteredResults);
    } catch (err) {
      setError('An error occurred during the search');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    searchResults
  };
};