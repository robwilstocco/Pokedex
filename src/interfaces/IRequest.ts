export interface IRequest {
  count: number;
  next: null;
  previous: null;
  results: [
    {
      name: string;
      url: string;
    },
  ];
}

export interface IPokemonDetailRequest {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
  cries: {
    latest: string;
    legacy: string;
  };
}

export interface IPokemonSpeciesRequest {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    },
  ];
  generation: {
    name: string;
    url: string;
  };
}

export interface IPokemonGenerationRequest {
  id: number;
  pokemon_species: [
    {
      name: string;
      url: string;
    },
  ];
}

export interface IPokemonTypeRequest {
  id: number;
  name: string;
  pokemon: [
    {
      slot: number;
      pokemon: {
        name: string;
        url: string;
      };
    },
  ];
}
