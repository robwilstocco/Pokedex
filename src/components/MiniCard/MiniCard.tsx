import Image from 'next/image';
import { IPokemon } from '../../interfaces/IPokemon';
import { PokemonCard, PokemonId, PokemonInfo, PokemonName } from './styles';

const MiniCard = ({ id, name, image }: IPokemon) => {
  return (
    <PokemonCard>
      <Image
        id="imagem"
        src={image}
        width="75"
        height="75"
        alt={name}
        style={{ transform: "translateZ(20px)" }}
      />
      <PokemonInfo>
        <PokemonId>Nº {id.padStart(4, "0")}</PokemonId>
        <PokemonName>{name}</PokemonName>
      </PokemonInfo>
    </PokemonCard>
  );
}

export default MiniCard

