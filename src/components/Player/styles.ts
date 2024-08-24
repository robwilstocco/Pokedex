import styled from "styled-components";

export const PlayerButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  & svg {
    color: #2b2a4c;
    height: 25px;
    width: 25px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
