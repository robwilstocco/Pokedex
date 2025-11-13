import { IPokemon, IPokemonEvolution } from "./IPokemon";

export interface IPageProps {
  total: number;
  pokemons: IPokemon[];
  evolution: IPokemonEvolution[];
  page?: number;
  totalPages?: number;
}
