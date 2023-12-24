import styled from 'styled-components';

const PokemonCard = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  min-width: 300px;
  border: 1px solid #ccc;  
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 0.5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  background-color: #FFFFFF;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const PokemonInfo = styled.div`
  margin-left: 10px;
`;

const PokemonId = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const PokemonName = styled.h1`
  font-size: 24px;
  font-weight: normal;
  color: #333;
  text-transform: capitalize;
`;

const MiniCard = ({ id, name }) => {
  return (
    <PokemonCard>
      <PokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <PokemonInfo>
        <PokemonId>Nº {id.padStart(4, "0")}</PokemonId>
        <PokemonName>{name}</PokemonName>
      </PokemonInfo>
    </PokemonCard>
  );
}

export default MiniCard

