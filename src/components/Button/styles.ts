import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 3rem;
`

export const StyledButton = styled.button`
    background-color: back;
    border: none;
    cursor: pointer;
    svg{
      height: 40px;
      width: 40px;
      color: var(--secondary);
    }
    p{
      border-radius: 0.3rem;
      color: #FFF;
      align-content: center;
      text-transform: uppercase;
      font-weight: 700;
      min-width: 90px;
      height: 40px;
      background-color: var(--secondary);
      font-size: 1rem;
      padding: 0 0.5rem;
    }
    &:hover{
      svg{
        color: var(--background);
        border: 2px solid var(--secondary);
        background-color: var(--secondary);
        border-radius: 100%;
      }
      p{
        color: var(--secondary);
        border: 2px solid var(--secondary);
        background-color: var(--background);
      }
    }
    &:disabled{
      svg{
        color: grey;
        border: none;
        background-color: var(--background);
        cursor: default;
      }
    }
`