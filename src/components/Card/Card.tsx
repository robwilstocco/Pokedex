import Image from "next/image";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { IPokemonDetail } from "../../interfaces/IPokemon";
import { heightFormat, WeightFormat } from "../../../utils/formatters";
import {
  CardContent,
  CardWrapper,
  Details,
  DetailsGroup,
  ImageBackground,
  InfoContainer,
  InfoText,
  InfoTitle,
  StyledChips,
  Title,
  TypesContainer,
} from "./styles";
import Player from "../Player/Player";

export default function Card(pokemon: IPokemonDetail) {
  useEffect(() => {
    const cardContainer = document.getElementById("parallax");
    if (!cardContainer) return;
    VanillaTilt.init(cardContainer, { glare: true, scale: 1.1 });
  }, []);

  return (
    <CardWrapper id="parallax">
      <CardContent>
        <Title>{`#${pokemon.id?.toString().padStart(4, "0")} - ${pokemon.name}`}</Title>
        <ImageBackground>
          <Image
            id="imagem"
            src={pokemon.image}
            width="175"
            height="175"
            alt={pokemon.name}
            style={{ transform: "translateZ(20px)" }}
          />
        </ImageBackground>
        <Details>
          <DetailsGroup flex={3}>
            <InfoTitle>Description:</InfoTitle>
            <InfoText>{pokemon.flavor}</InfoText>
          </DetailsGroup>
          <DetailsGroup>
            <InfoTitle>Type(s):</InfoTitle>
            <TypesContainer>
              {pokemon.types?.map((item, index) => (
                <StyledChips
                  key={index}
                  label={item.type.name}
                  sx={{
                    backgroundColor: `var(--${item.type.name})`,
                    color: "#FFFFFF",
                  }}
                />
              ))}
            </TypesContainer>
          </DetailsGroup>
          <DetailsGroup direction="row">
            <InfoContainer>
              <InfoTitle>Height:</InfoTitle>
              <InfoText>{heightFormat(pokemon.height)}</InfoText>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Weight:</InfoTitle>
              <InfoText>{WeightFormat(pokemon.weight)}</InfoText>
            </InfoContainer>
            <InfoContainer>
              <Player song={pokemon.song} />
            </InfoContainer>
          </DetailsGroup>
        </Details>
      </CardContent>
    </CardWrapper>
  );
}
