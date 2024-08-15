import axios from "axios";
import IRequest from "../interfaces/IRequest";

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