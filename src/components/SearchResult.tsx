
import { ScrollArea } from "@/components/ui/scroll-area";
import { InternalLink } from "@/components/ui/internal-link";
import { CornerDownRight } from "lucide-react";

type SearchResultProps = {
  loading: boolean;
  error?: Error;
  searchResults?: any[];
};

export function SearchResult({ loading, error, searchResults }: SearchResultProps) {
  return (
    <ScrollArea className="h-[calc(100vh-20rem)]">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchResults && (
        <ul className="list-none p-0 text-sm">
          {searchResults.map((category) => (
            <>
              {category.results.map((result) => (
                <li key={result.name ?? result.title} className="bg-gray-100 my-2 p-3 rounded-md transition-colors duration-300 hover:bg-gray-200">
                  {result.name ?? result.title} | {category.category}
                </li>
              ))}
              <li>
                <InternalLink className="flex items-center text-blue-500 hover:text-blue-700" to={`/${category.category.toLowerCase()}`}>
                  <CornerDownRight className="m-2 size-4" /> View all {category.category}
                </InternalLink>
              </li>
            </>
          ))}
        </ul>
      )}
    </ScrollArea>
  );
}