import { Pagination } from "@mui/material";
import MiniCard from "../src/components/MiniCard/MiniCard";
import Link from "../src/components/Link/Link";
import CardList from "../src/components/CardList/CardList";
import { getPokemonList } from "../src/api";
import Wrapper from "../src/components/Wrapper/Wrapper";
import { LIMIT } from "../utils/globalConstants";
import { useSearchContext } from "../src/context/SearchContext";
import { useMemo, useState } from "react";

export async function getStaticProps() {
  const pokemons = await getPokemonList();
  return {
    props: {
      pokemons,
      totalPages: Math.ceil(pokemons.length / LIMIT),
    },
  };
}

export default function Home() {
  const { initialAllPokemon, searchTerm, currentPage, setCurrentPage } =
    useSearchContext();

  const [pages, setPages] = useState(
    Math.ceil(initialAllPokemon.length / LIMIT),
  );

  const filteredList = useMemo(() => {
    setCurrentPage(1);
    if (!searchTerm) return initialAllPokemon;
    return initialAllPokemon.filter(
      (pokemon) =>
        pokemon.id.toString() === searchTerm ||
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [initialAllPokemon, searchTerm, setCurrentPage]);

  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * LIMIT;
    setPages(Math.ceil(filteredList.length / LIMIT));
    return filteredList.slice(startIndex, startIndex + LIMIT);
  }, [filteredList, currentPage]);

  return (
    <Wrapper justify="space-between">
      <CardList>
        {paginatedResults.map((pokemon) => (
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
        count={pages}
        color="primary"
        size="small"
        page={currentPage}
        siblingCount={2}
        onChange={(_, page: number) => {
          setCurrentPage(page);
        }}
      />
    </Wrapper>
  );
}
