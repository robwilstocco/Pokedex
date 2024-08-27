import { ILink } from "../../interfaces/ILink";
import { StyledLink } from "./styles";

const Link = ({ href, onclick, children }: ILink) => {
  return (
    <StyledLink href={href} onClick={onclick}>
      {children}
    </StyledLink>
  );
};

export default Link;
