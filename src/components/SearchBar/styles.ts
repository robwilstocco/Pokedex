import styled from "styled-components";

export const Content = styled.section<{
  $direction: string;
  $justify: string;
  $align: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  background-color: var(--background);
  flex: 1;
  padding: 1rem;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid var(--secondary);
  height: 35px;
  width: 300px;

  svg {
    color: var(--secondary);
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 1;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
`;
