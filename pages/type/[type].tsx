import { GetServerSidePropsContext } from "next";
import { IPageProps } from "../../src/interfaces/IPageProps";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import CardList from "../../src/components/CardList/CardList";
import MiniCard from "../../src/components/MiniCard/MiniCard";
import Link from "../../src/components/Link/Link";
import { getPokemonByType } from "../../src/api";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    if (ctx?.params?.type) {
      const type = ctx.params.type.toString();
      const pokemons = await getPokemonByType(type);
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
        {pokemons.map(
          (pokemon) =>
            pokemon.id !== "none" && (
              <Link key={pokemon.name} href={`/pokemon/${pokemon.id}`}>
                <MiniCard
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                />
              </Link>
            ),
        )}
      </CardList>
    </Wrapper>
  );
}
