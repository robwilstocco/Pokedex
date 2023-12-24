import styles from "styles/Home.module.css";
import MiniCard from "../src/components/MiniCard";
import Link from "next/link";
import { setCookie, parseCookies } from "nookies";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import Loading from "../src/components/Loading";
import { useEffect, useState } from "react";

export async function getServerSideProps(ctx) {
  let loading = true;
  const pageNumber = parseCookies(ctx, "currentPage");
  const currentPage =
    Object.keys(pageNumber).length > 0 ? pageNumber.currentPage : "1";
  const maxPokemons = 1017;
  const data = await getPokemons(currentPage).finally(()=> loading = false);
  data.results.forEach((item) => {
    const id = item.url.split("/");
    item.id = id[6];
  });

  return {
    props: {
      pokemons: data.results,
      page: currentPage,
      totalPages: Math.ceil(maxPokemons / 50),
      progress: loading
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

export default function Home({ pokemons, page, totalPages, progress }) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    setLoading(progress)
  },[progress])

  return (
    <section className={styles.content_container}>
      {!loading ? (
        <>
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
          <Pagination
            count={totalPages}
            color="primary"
            size="large"
            page={Number(page)}
            onChange={(event: React.ChangeEvent, page: number) => {
              setCookie(null, "currentPage", page.toString());
              router.push("/");
            }}
          />
        </>
      ) : (
        <Loading/>
      )}
    </section>
  );
}
