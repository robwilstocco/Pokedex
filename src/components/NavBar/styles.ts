import Link from "next/link";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  height: 50px;
  background-color: var(--secondary);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  img{
    display: none;
  }
`

export const DropDownButton = styled.button`
  height: 50px;
  background-color: transparent;
  color: var(--background);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`
export const DropDownContent = styled.div`
  min-width: 150px;
  display: none;
  position: absolute;  
  background-color: var(--hover);
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
  z-index: 1;
`
export const DropDownLink = styled(Link)`
    color: black;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: block;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
      background-color: var(--secondary);
      color: var(--background);;
    }
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropDownContent}{
    display: block;
  }
`