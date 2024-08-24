import Link from "next/link";
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
export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
