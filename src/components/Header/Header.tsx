import Image from "next/image";
import { setCookie } from "nookies";
import { HeaderWrapper, Icons, IconsWrapper, Logo, StyledHeader } from "./styles";
import { FaGithub } from "react-icons/fa";

const Header = () => {

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <Logo href={"/"} onClick={() => setCookie(null, "currentPage", '1')}>
            <Image src="/images/logo.png" width="50" height="50" alt="PokeCard" />
            <Image src="/images/logo_title.png" width="240" height="80" alt="PokeCard" priority={true} />
          </Logo>
          <IconsWrapper>
            <Icons href={'https://github.com/robwilstocco/Pokedex'}>
              <FaGithub />
            </Icons>
          </IconsWrapper>
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
