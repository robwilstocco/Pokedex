import { IPokemon } from "./IPokemon";

export interface ISearchContextData {
  initialAllPokemon: IPokemon[] | [];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
