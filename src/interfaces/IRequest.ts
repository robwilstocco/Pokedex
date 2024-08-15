
interface IResult {
    name: string,
    url: string
}

export default interface IRequest {
    count: number
    next: null
    previous: null
    results: IResult[]
}