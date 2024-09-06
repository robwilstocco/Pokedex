import { IPokemon, IPokemonEvolution } from "./IPokemon";

export interface ITree {
  father: IPokemon;
  sons: IPokemonEvolution[];
}
