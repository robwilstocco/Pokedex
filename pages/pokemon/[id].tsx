import Card from '../../src/components/Card';
import styles from '../../styles/PokemonCard.module.css';

export const getServerSideProps = async (context) => {
  
  const id = context.params.id.toString()
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json())
  console.log(pokemon)
  const pokemon_species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((data) => data.json())
  pokemon.flavor = pokemon_species?.flavor_text_entries[0]?.flavor_text ? pokemon_species.flavor_text_entries[0].flavor_text : 'N/A';

  return {
    props: {
      pokemon: pokemon 
    },
    
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <section className={styles.content_container}>
      <Card pokemon={pokemon}/>
    </section>
  )
}