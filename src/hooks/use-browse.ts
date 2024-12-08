import { useState, useEffect } from 'react';
import { SWAPICategory, SWPerson, SWAPIResponse } from '@/types/swapi';

export function useBrowse(category: SWAPICategory) {
  const [data, setData] = useState<SWPerson[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://swapi.dev/api/${category}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result: SWAPIResponse<SWPerson> = await response.json();
        setData(result.results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { data, loading, error };
}