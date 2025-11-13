import { createContext, useContext } from "react";
import { ISearchContextData } from "../interfaces/ISearchContextData";

const SearchContext = createContext<ISearchContextData | undefined>(undefined);

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}

export default SearchContext;
