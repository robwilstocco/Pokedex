import Link from "../Link/Link"
import MiniCard from "../MiniCard"
import { Container } from "./styles"


const CardList = ({ children, pokemons }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default CardList;