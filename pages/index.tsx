import MiniCard from "../src/components/MiniCard";
import Link from "next/link";
import { setCookie, parseCookies } from "nookies";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import styled from "styled-components";

export async function getServerSideProps(ctx) {
  const pageNumber = parseCookies(ctx, "currentPage");
  const currentPage =
    Object.keys(pageNumber).length > 0 ? pageNumber.currentPage : "1";
  const maxPokemons = 1017;
  const data = await getPokemons(currentPage);
  data.results.forEach((item) => {
    const id = item.url.split("/");
    item.id = id[6];
  });

  return {
    props: {
      pokemons: data.results,
      page: currentPage,
      totalPages: Math.ceil(maxPokemons / 50),
    },
  };
}

async function getPokemons(currentPage) {
  const offset =
    currentPage === "1" ? "0" : (Number(currentPage) * 50 - 50).toString();
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/?limit=${50}&offset=${offset}`);
  return await res.json();
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

export default function Home({ pokemons, page, totalPages }) {
  const router = useRouter();
  return (
    <Wrapper>
      <List>
        {pokemons.map((pokemon) => (
          <StyledLink
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
          >
            <MiniCard id={pokemon.id} name={pokemon.name} />
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
  );
}
