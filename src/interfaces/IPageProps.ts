import { IPokemon } from "./IPokemon";

export interface IPageProps {
  pokemons: IPokemon[];
  page?: number;
  totalPages?: number;
}
