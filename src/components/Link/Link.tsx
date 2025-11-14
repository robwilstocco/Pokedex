import { ILink } from "../../interfaces/ILink";
import { List, StyledLink } from "./styles";

const Link = ({ href, onclick, children }: ILink) => {
  return (
    <List>
      <StyledLink href={href} onClick={onclick}>
        {children}
      </StyledLink>
    </List>
  );
};

export default Link;
