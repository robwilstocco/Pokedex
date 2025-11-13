import { useState, useMemo } from "react";
import SearchContext from "./SearchContext";
import { ISearchProviderProps } from "../interfaces/ISearchProviderProps";

export function SearchProvider({
  children,
  initialAllPokemon,
  initialPage = 1,
}: ISearchProviderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);

  const value = useMemo(
    () => ({
      initialAllPokemon,
      searchTerm,
      setSearchTerm,
      currentPage,
      setCurrentPage,
    }),
    [initialAllPokemon, searchTerm, currentPage, setCurrentPage],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
