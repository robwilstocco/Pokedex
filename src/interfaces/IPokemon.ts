export interface IPokemon {
  id: string;
  name: string;
  image: string;
}

export interface IPokemonDetail {
  id: number;
  name: string;
  image: string;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
  flavor: string;
  song: string;
  height: number;
  weight: number;
  evolution_chain_id: number;
  generation: string;
}

export interface IPokemonEvolution {
  treeLevel: number;
  father: string;
  pokemonInfo: IPokemon;
  sons: IPokemonEvolution[] | [];
}
