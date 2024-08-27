import { GetServerSidePropsContext } from "next";
import { IPageProps } from "../../src/interfaces/IPageProps";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import CardList from "../../src/components/CardList/CardList";
import MiniCard from "../../src/components/MiniCard/MiniCard";
import Link from "../../src/components/Link/Link";
import { getPokemonByGeneration } from "../../src/api";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    if (ctx?.params?.id) {
      const id = ctx.params.id.toString();
      const pokemons = await getPokemonByGeneration(id);
      return {
        props: {
          pokemons,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default function Pokemon({ pokemons }: IPageProps) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
