import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "nookies";
import styled from "styled-components";
import { getGenerations } from "../api";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--primary);
  padding: 0 5rem;
  z-index: 1;
`;
const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const DropDownButton = styled.button`
  background-color: transparent;
  color: var(--background);
  height: 80px;
  font-size: 2rem;
  font-weight: 700;
  -webkit-text-stroke-width: 0.06rem;
  -webkit-text-stroke-color: black;
  border: none;
  cursor: pointer;
`
const DropDownContent = styled.div`
  display: none;
  position: absolute;  
  background-color: var(--background);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`
const StyledLink = styled(Link)`
    color: black;
    padding: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: var(--hover);
    }
`;
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropDownContent}{
    display: block;
  }
`

const Header = () => {
  const {data: generations} = useQuery({ queryKey: ['generations'], queryFn: getGenerations });
  return (
    <>
    <StyledHeader>
      <Logo href={"/"} onClick ={() => setCookie(null, "currentPage", '1')}>
        <Image src="/images/logo.png" width="50" height="50" alt="PokeCard" />
        <Image src="/images/logo_title.png" width="300" height="100" alt="PokeCard" priority={true}/>
      </Logo>
      <DropDown>
        <DropDownButton>Generations</DropDownButton>
        <DropDownContent>
          {generations?.map((generation, key) => (
            <StyledLink key={key} href={`/generation/${key+1}`} >{`Generation ${key+1}`}</StyledLink>
          ))}
        </DropDownContent>
      </DropDown>
    </StyledHeader>

      <h1>teste</h1>
    </>
  );
};

export default Header;
