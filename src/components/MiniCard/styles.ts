import styled from "styled-components";

export const PokemonCard = styled.li`
  display: flex;
  align-items: center;
  width: 15rem;
  min-width: 15rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  max-height: 5.5rem;
  padding: 0.5rem;
  gap: 0.5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  background-color: #ffffff;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonId = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

export const PokemonName = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  text-transform: capitalize;
  word-break: break-all;
`;
