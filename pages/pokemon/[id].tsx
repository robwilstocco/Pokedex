import Card from '../../src/components/Card';
import styled from 'styled-components';

export const getServerSideProps = async (context) => {
  
  const id = context.params.id.toString()
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json())
  const pokemon_species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((data) => data.json())
  pokemon.flavor = pokemon_species?.flavor_text_entries[0]?.flavor_text ? pokemon_species.flavor_text_entries[0].flavor_text : 'N/A';
  
  return {
    props: {
      pokemon: pokemon 
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
      <Card pokemon={pokemon}/>
    </Wrapper>
  )
}