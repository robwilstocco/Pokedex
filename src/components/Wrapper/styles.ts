import styled from "styled-components";
import { IWrapper } from "../../interfaces/IWrapper";

export const Content = styled.section<IWrapper>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  background-color: var(--background);
  flex: 1;
  padding: 1rem;
  gap: 1rem;
`