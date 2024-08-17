import axios from "axios";
import IRequest from "../interfaces/IRequest";
import { IPokemon, IPokemons } from "../interfaces/IPokemon";

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
        return data.results
    } catch (error) {
        throw new Error('Could not get pokemon types')
    }
}

export async function getServerSidePokemons(currentPage: number, limit: number): Promise<IPokemon[]> {
    const offset = currentPage === 1 ? "0" : (Number(currentPage) * limit - limit).toString();
    try {
        const { data } = await http.get<IPokemons>(`/pokemon/?limit=${limit}&offset=${offset}`)
        data.results.forEach((pokemon: IPokemon) => {
            const id = pokemon.url.split("/");
            pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`
            pokemon.id = id[6];
        });
        return data.results
    } catch (error) {
        throw new Error('Could not get pokemons')
    }
}