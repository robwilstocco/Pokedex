import Image from "next/image";
import { setCookie } from "nookies";
import { HeaderWrapper, Icons, IconsWrapper, Logo, StyledHeader } from "./styles";
import { FaGithub } from "react-icons/fa";
import Link from "../Link/Link";

const Header = () => {

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <Link href={"/"} onclick={() => setCookie(null, "currentPage", '1')}>
            <Image src="/images/logo.png" width="50" height="50" alt="PokeCard" />
            <Image src="/images/logo_title.png" width="240" height="80" alt="PokeCard" priority={true} />
          </Link>
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
