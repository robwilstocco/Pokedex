import styles from "styles/Home.module.css";
import MiniCard from "../src/components/MiniCard";
import Link from "next/link";
import { setCookie, parseCookies } from "nookies";
import { Pagination } from "@mui/material";

export async function getServerSideProps(ctx) {

  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const pageNumber = parseCookies(ctx, "currentPage");
  const currentPage = Object.keys(pageNumber).length > 0 ? pageNumber.currentPage : '1';
  const maxPokemons = 1017;
  const totalPages = Math.ceil(maxPokemons / 50);
  // const limit = Number(currentPage) === totalPages ? 17 : 50;
  const offset = currentPage === '1' ? '0' : (Number(currentPage) * 50 - 50).toString();

  const res = await fetch(`${api}/?limit=${50}&offset=${offset}`);
  const data = await res.json();
  
  data.results.forEach((item) => {
    const id = item.url.split("/");
    item.id = id[6];
  });

  return {
    props: {
      pokemons: data.results,
      page: currentPage,
      totalPages: totalPages
    },
  };
}

export default function Home({ pokemons, page, totalPages }) {
  return (
    <section className={styles.content_container}>
      <ul className={styles.pokemon_list}>
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
            className={styles.pokemon_link}
          >
            <MiniCard id={pokemon.id} name={pokemon.name} />
          </Link>
        ))}
      </ul>
      <Link href={"/"}>
        <Pagination
          count={totalPages}
          color="primary"
          size="large"
          page={Number(page)}
          onChange={(event: React.ChangeEvent, page: number) => {
            setCookie(null, "currentPage", (page).toString());
          }}
        />
      </Link>
    </section>
  );
}
