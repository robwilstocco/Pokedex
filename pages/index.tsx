import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { setCookie, parseCookies } from "nookies";
import { Pagination } from "@mui/material";
import MiniCard from "../src/components/MiniCard/MiniCard";
import Link from "../src/components/Link/Link";
import CardList from "../src/components/CardList/CardList";
import { getPokemonList } from "../src/api";
import { IPageProps } from "../src/interfaces/IPageProps";
import Wrapper from "../src/components/Wrapper/Wrapper";
import { LIMIT, MAX_POKEMON } from "../utils/globalConstants";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // console.log(ctx.req.cookies)
  const { currentPage } = parseCookies(ctx, "currentPage");
  const pokemons = await getPokemonList(
    Number(currentPage),
    LIMIT,
    MAX_POKEMON,
  );
  return {
    props: {
      pokemons,
      page: Number(currentPage) || 1,
      totalPages: Math.ceil(MAX_POKEMON / LIMIT),
    },
  };
}

export default function Home({ pokemons, page, totalPages }: IPageProps) {
  const router = useRouter();
  return (
    <Wrapper justify="space-between">
      <CardList>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <MiniCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          </Link>
        ))}
      </CardList>
      <Pagination
        count={totalPages}
        color="primary"
        size="small"
        page={page}
        siblingCount={2}
        onChange={(_, page: number) => {
          setCookie(null, "currentPage", page.toString());
          router.push("/");
        }}
      />
    </Wrapper>
  );
}
