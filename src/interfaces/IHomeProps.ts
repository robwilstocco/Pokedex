import { IPokemon } from "./IPokemon";

export interface IHomeProps {
  pokemons: IPokemon[];
  page: number;
  totalPages: number;
}
