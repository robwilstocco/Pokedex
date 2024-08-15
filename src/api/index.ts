import axios from "axios";
import IGenerationRequest from "../interfaces/IGeneration";

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})


export const getGenerations = async () => {
    try {
        const {data} = await http.get<IGenerationRequest>('/generation')
        return data.results
    } catch (error) {
        throw new Error('Could not get generation')
    }
}