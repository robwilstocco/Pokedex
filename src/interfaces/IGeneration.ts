
interface IGeneration {
    name: string,
    url: string
}

export default interface IGenerationRequest {
    count: number
    next: null
    previous: null
    results: IGeneration[]
}