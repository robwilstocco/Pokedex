import { Container } from "./styles"


const CardList = ({ children, pokemons }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default CardList;