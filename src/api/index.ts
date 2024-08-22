import axios from "axios";
import IRequest from "../interfaces/IRequest";
import { IPokemon } from "../interfaces/IPokemon";

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

export const getGenerations = async () => {
    try {
        const { data } = await http.get<IRequest>('/generation')
        return data.results
    } catch (error) {
        throw new Error('Could not get pokemon generations')
    }
}

export const getTypes = async () => {
    try {
        const { data } = await http.get<IRequest>('/type')
        return data.results;
    } catch (error) {
        throw new Error('Could not get pokemon types')
    }
}

export const getServerSidePokemons = async (currentPage: number, limit: number, max: number): Promise<IPokemon[]> => {
    const offset = currentPage === 1 ? 0 : (Number(currentPage) * limit - limit);
    const officialTotal = limit + offset > max ? max - offset : limit;
    try {
        const { data } = await http.get<IRequest>(`/pokemon/?limit=${officialTotal}&offset=${offset}`);
        const pokemon: IPokemon[] = [];
        data.results.forEach((result) => {
            const id = result.url.split("/");
            pokemon.push({
                id: id[6],
                name: result.name.replaceAll('-', ' '),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`,
            });
        });
        return pokemon;
    } catch (error) {
        throw new Error('Could not get pokemon list');
    }
}