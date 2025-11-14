import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import { useSearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();
  return (
    <SearchContainer>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search your pokemon..."
      />
      <FaSearch />
    </SearchContainer>
  );
};

export default SearchBar;
