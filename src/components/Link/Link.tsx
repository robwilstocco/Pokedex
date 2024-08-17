import { ILink } from "../../interfaces/ILink";
import { StyledLink } from "./styles";


const Link = ({ children, href, onclick }: ILink) => {
    return (
        <StyledLink href={href} onClick={onclick}>
            {children}
        </StyledLink>
    )
}

export default Link;