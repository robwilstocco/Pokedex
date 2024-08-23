export const getIdByURL = (url: string): string => {
    const id = url.split("/")[6]
    return id;
}

export const WeightFormat = (weigth: number): string => {
    const formattedWeigth = `${weigth / 10} kg`
    return formattedWeigth;
}

export const heightFormat = (height: number): string => {
    const formattedHeight = `${height * 10} cm`
    return formattedHeight;
}