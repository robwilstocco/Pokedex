import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
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
  gap: 1rem;
`;

const Title = styled.h1`
  color: #000000;
  font-family: "Racing Sans One", sans-serif;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo href={"/"}>
        <Image src="/images/logo.png" width="50" height="50" alt="PokeCard" />
        <Title>POKECARD'S</Title>
      </Logo>
    </StyledHeader>
  );
};

export default Header;
