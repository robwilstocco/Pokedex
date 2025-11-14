import Image from "next/image";
import {
  HeaderWrapper,
  Icons,
  IconsWrapper,
  LogoText,
  LogoWrapper,
  StyledHeader,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <LogoWrapper href="/">
            <Image
              src="/images/logo.png"
              width="50"
              height="50"
              alt="PokeCard"
            />
            <LogoText
              src="/images/logo_title.png"
              width="256"
              height="82"
              alt="PokeCard"
              priority={true}
            />
          </LogoWrapper>
          {router.pathname === "/" && <SearchBar />}
          <IconsWrapper>
            <Icons href={"https://github.com/robwilstocco/Pokedex"} aria-label="Github Link">
              <FaGithub />
            </Icons>
          </IconsWrapper>
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
