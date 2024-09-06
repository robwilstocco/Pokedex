import { IPokemon, IPokemonEvolution } from "./IPokemon";

export interface IPageProps {
  pokemons: IPokemon[];
  evolution: IPokemonEvolution[];
  page?: number;
  totalPages?: number;
}
