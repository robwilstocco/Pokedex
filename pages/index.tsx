import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { setCookie, parseCookies } from "nookies";
import { Pagination } from "@mui/material";
import MiniCard from "../src/components/MiniCard";
import Link from "../src/components/Link/Link";
import CardList from "../src/components/CardList/CardList";
import { getServerSidePokemons } from "../src/api";
import { IHomeProps } from "../src/interfaces/IHomeProps";

const limit = 50;
const maxPokemons = 1017;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // console.log(ctx.req.cookies)
  const { currentPage } = parseCookies(ctx, "currentPage");
  const pokemons = await getServerSidePokemons(Number(currentPage), limit);
  return {
    props: {
      pokemons,
      page: currentPage || 1,
      totalPages: Math.ceil(maxPokemons / limit),
    },
  };
}

export default function Home({ pokemons, page, totalPages }: IHomeProps) {
  const router = useRouter();
  return (
    <>
      <CardList>
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
          >
            <MiniCard id={pokemon.id} name={pokemon.name} image={pokemon.image} />
          </Link>
        ))}
      </CardList>
      <Pagination
        count={totalPages}
        color="primary"
        size="medium"
        page={Number(page)}
        siblingCount={1}
        onChange={(_, page: number) => {
          setCookie(null, "currentPage", page.toString());
          router.push("/");
        }}
      />
    </>
  );
}
