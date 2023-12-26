import Image from "next/image";
import { Chip } from "@mui/material";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 530px;
  width: 320px;
  border: 5px solid #2b2a4c;
  border-radius: 0.5rem;
  background-color: #b31312;
  box-shadow: 0px 90px 69px -14px rgba(0, 0, 0, 0.75);
  transform-style: preserve-3d;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  background-color: #eee2de;
  border-radius: 0.5rem;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

const PokemonTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  transform: translateZ(20px);
`;

const PokemonImageBackground = styled.div`
  background: radial-gradient(
    circle,
    rgba(100, 216, 247, 1) 50%,
    rgba(20, 108, 148, 1) 100%
  );
  height: 45%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`;

const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  transform-style: preserve-3d;
`;

const InfoTitle = styled.h4`
  font-size: 1.1rem;
  transform: translateZ(20px);
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  transform: translateZ(20px);
`;

const TypesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  transform-style: preserve-3d;
`;

const StyledChips = styled(Chip)`    
    font-size: 0.8rem ;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    transform: translateZ(20px);
`

const GeneralInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  transform-style: preserve-3d;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  transform-style: preserve-3d;
`;


export default function Card({ pokemon }) {
  useEffect(() => {
    const cardContainer = document.getElementById("parallax");
    if (!cardContainer) return;
    VanillaTilt.init(cardContainer, { glare: true, scale: 1.1 });
  }, []);

  return (
    <CardWrapper id="parallax">
      <CardContent>
        <PokemonTitle>{`#${pokemon.id.toString().padStart(4, "0")} - ${
          pokemon.name
        }`}</PokemonTitle>
        <PokemonImageBackground>
          <Image
            id="imagem"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width="200"
            height="200"
            alt={pokemon.name}
            priority={true}
            style={{ transform: "translateZ(20px)" }}
          />
        </PokemonImageBackground>
        <PokemonDetails>
          <InfoTitle>Description:</InfoTitle>
          <InfoText>{pokemon.flavor.replace(/[\n\f]/g, " ")}</InfoText>
          <InfoTitle>Type:</InfoTitle>
          <TypesContainer>
            {pokemon.types.map((item, index) => (
              <StyledChips
                key={index}
                label={item.type.name}
                sx={{
                  backgroundColor: `var(--${item.type.name})`,
                  color: '#FFFFFF'
                }}
              />
            ))}
          </TypesContainer>
          <GeneralInfo>
            <InfoContainer>
              <InfoTitle>Height:</InfoTitle>
              <InfoText>{pokemon.height * 10} cm</InfoText>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Weight:</InfoTitle>
              <InfoText>{pokemon.weight / 10} kg</InfoText>
            </InfoContainer>
          </GeneralInfo>
        </PokemonDetails>
      </CardContent>
    </CardWrapper>
  );
}
