import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 80px;
  width: 100%;
  background-color: var(--primary);
  z-index: 1;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    filter: drop-shadow(0 0 5px var(--secondary));
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const Icons = styled(Link)`
  svg {
    color: var(--secondary);
    width: 25px;
    height: 25px;
  }
  &:hover {
    width: 25px;
    height: 25px;
    background-color: var(--hover);
    border-radius: 50%;
  }
`;

export const LogoText = styled(Image)`
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;
