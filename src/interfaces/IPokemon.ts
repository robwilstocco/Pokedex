export interface IPokemon {
    id?: string,
    name: string,
    url: string,
    image?: string,
}

export interface IPokemons {
    count: number
    next: null
    previous: null
    results: IPokemon[]
}