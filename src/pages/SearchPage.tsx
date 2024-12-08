import { AppLayout } from "@/components/AppLayout";
import { SearchInput } from "@/components/SearchInput";
import { SearchResult } from "@/components/SearchResult";
import { useSearch } from "@/hooks/use-search";
import { useState } from "react";

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { loading, error, searchResults } = useSearch<SearchResult[]>(searchTerm);

  return (
    <AppLayout>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        className="mb-8"
      />
      <SearchResult 
        loading={loading}
        error={error}
        searchResults={searchResults}
      />
    </AppLayout>
  );
}
