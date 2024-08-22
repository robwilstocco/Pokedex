import Card from '../../src/components/Card';
import styled from 'styled-components';

export const getServerSideProps = async (context) => {
  const id = context.params.id.toString();
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json());
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const flavor = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(async (data) => {
    if (data.status !== 404) {
      const response = await data.json()
      return response.flavor_text_entries[0].flavor_text;
    } else {
      return pokemon.flavor = 'N/A';
    }
  });

  return {
    props: {
      pokemon: {
        ...pokemon,
        flavor,
        image
      }
    },

  }
}

const Wrapper = styled.section`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 165px);
`

export default function Pokemon({ pokemon }) {
  return (
    <Wrapper>
      <Card pokemon={pokemon} />
    </Wrapper>
  )
}