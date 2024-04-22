import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--primary);
  padding: 0 5rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;


const Header = () => {
  return (
    <StyledHeader>
      <Logo href={"/"}>
        <Image src="/images/logo.png" width="50" height="50" alt="PokeCard" />
        <Image src="/images/logo_title.png" width="300" height="100" alt="PokeCard" />
      </Logo>
    </StyledHeader>
  );
};

export default Header;
