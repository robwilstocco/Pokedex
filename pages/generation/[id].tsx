import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import MiniCard from '../../src/components/MiniCard';
import { Pagination } from '@mui/material';
import { parseCookies, setCookie } from 'nookies';

export const getServerSideProps = async (ctx) => {
  const pageNumber = parseCookies(ctx, "currentPage");
  const currentPage =
    Object.keys(pageNumber).length > 0 ? pageNumber.currentPage : "1";

  const id = ctx.params.id.toString();
  const pokemon = await fetch(`https://pokeapi.co/api/v2/generation//${id}`).then((data) => data.json());
  const maxPokemons = pokemon.pokemon_species.length - 1;
  pokemon.pokemon_species.forEach((item) => {
    const id = item.url.split("/");
    item.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`
    item.id = id[6];
  });

  return {
    props: {
      pokemons: pokemon.pokemon_species,
      page: currentPage,
      totalPages: Math.ceil(maxPokemons / 50),
    },

  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 15%;
  min-height: calc(100vh - 165px);
`;

const List = styled.div`
  display: flex;
    flex-direction: row;
    flex-wrap:  wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: #000;
    text-decoration: none;
`;

export default function Pokemon({ pokemons, page, totalPages }) {
  const router = useRouter();
  return (
    <Wrapper>
      <List>
        {pokemons.map((pokemon) => (
          <StyledLink
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
          >
            <MiniCard id={pokemon.id} name={pokemon.name} image={pokemon.image} />
          </StyledLink>
        ))}
      </List>
      <Pagination
        count={totalPages}
        color="primary"
        size="medium"
        page={Number(page)}
        siblingCount={0}
        onChange={(event: React.ChangeEvent, page: number) => {
          setCookie(null, "currentPage", page.toString());
          router.push("/");
        }}
      />
    </Wrapper>
  )
}