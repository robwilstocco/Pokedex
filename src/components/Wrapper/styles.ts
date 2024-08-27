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
