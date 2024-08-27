import axios from "axios";
import {
  IPokemonDetailRequest,
  IPokemonGenerationRequest,
  IPokemonSpeciesRequest,
  IPokemonTypeRequest,
  IRequest,
} from "../interfaces/IRequest";
import { IPokemon, IPokemonDetail } from "../interfaces/IPokemon";
import { getIdByURL } from "../../utils/formatters";
import { MAX_POKEMON } from "../../utils/globalConstants";

const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

const handleError = (message: string) => {
  throw new Error(message);
};

const createPokemonImageUrl = (id: string | number, type: string) => {
  if (type === "card") {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  } else {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
};

export const getGenerations = async () => {
  try {
    const { data } = await http.get<IRequest>("/generation");
    return data.results;
  } catch {
    handleError("Could not get Pokemon generations");
  }
};

export const getTypes = async () => {
  try {
    const { data } = await http.get<IRequest>("/type");
    return data.results;
  } catch {
    handleError("Could not get Pokemon types");
  }
};

export const getPokemonList = async (
  currentPage: number,
  limit: number,
  max: number,
): Promise<IPokemon[]> => {
  try {
    const offset = currentPage === 1 ? 0 : currentPage * limit - limit;
    const officialTotal = limit + offset > max ? max - offset : limit;

    const { data } = await http.get<IRequest>(
      `/pokemon/?limit=${officialTotal}&offset=${offset}`,
    );

    return data.results.map((result) => {
      const id = getIdByURL(result.url);
      return {
        id,
        name: result.name.replace(/-/g, " "),
        image: createPokemonImageUrl(id, "mini"),
      };
    });
  } catch {
    handleError("Could not get Pokemon list");
    return [] as IPokemon[];
  }
};

export const getPokemonDetail = async (id: string): Promise<IPokemonDetail> => {
  try {
    const [{ data: pokemon }, { data: species }] = await Promise.all([
      http.get<IPokemonDetailRequest>(`/pokemon/${id}`),
      http.get<IPokemonSpeciesRequest>(`/pokemon-species/${id}`),
    ]);

    const pokemonDetail: IPokemonDetail = {
      id: pokemon.id,
      name: pokemon.name.replace(/-/g, " "),
      image: createPokemonImageUrl(id, "card"),
      types: pokemon.types,
      flavor:
        species.flavor_text_entries[0]?.flavor_text.replace(/[\n\f]/g, " ") ||
        "N/A",
      song: pokemon.cries?.latest || "",
      height: pokemon.height,
      weight: pokemon.weight,
      evolution_chain_id: Number(getIdByURL(species.evolution_chain.url)),
      generation: species.generation.name
        .replace("generation-", "")
        .toUpperCase(),
    };

    return pokemonDetail;
  } catch {
    handleError("Could not get Pokemon details");
    return {} as IPokemonDetail;
  }
};

export const getPokemonByGeneration = async (
  id: string,
): Promise<IPokemon[]> => {
  try {
    const { data } = await http.get<IPokemonGenerationRequest>(
      `/generation/${id}`,
    );
    const pokemons = data.pokemon_species.map((pokemon) => {
      const id = getIdByURL(pokemon.url);
      return {
        id,
        name: pokemon.name.replace(/-/g, " "),
        image: createPokemonImageUrl(id, "mini"),
      };
    });

    return pokemons.sort((a, b) => {
      if (Number(a.id) > Number(b.id)) {
        return 1;
      }
      if (Number(a.id) < Number(b.id)) {
        return -1;
      }
      return 0;
    });
  } catch {
    handleError("Could not get Pokemon by generation");
    return {} as IPokemon[];
  }
};

export const getPokemonByType = async (type: string): Promise<IPokemon[]> => {
  try {
    const { data } = await http.get<IPokemonTypeRequest>(`/type/${type}`);
    const pokemons = data.pokemon.map(({ pokemon }) => {
      const id = getIdByURL(pokemon.url);
      return {
        id: Number(id) > MAX_POKEMON ? "none" : id,
        name: pokemon.name.replace(/-/g, " "),
        image: createPokemonImageUrl(id, "mini"),
      };
    });
    return pokemons.sort((a, b) => {
      if (Number(a.id) > Number(b.id)) {
        return 1;
      }
      if (Number(a.id) < Number(b.id)) {
        return -1;
      }
      return 0;
    });
  } catch {
    handleError("Could not get Pokemon by types");
    return {} as IPokemon[];
  }
};
