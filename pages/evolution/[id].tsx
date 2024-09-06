import { GetServerSidePropsContext } from "next";
import { IPageProps } from "../../src/interfaces/IPageProps";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import { getPokemonEvolution } from "../../src/api";
import Tree from "../../src/components/Tree/Tree";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    if (ctx?.params?.id) {
      const id = ctx.params.id.toString();
      const evolution = await getPokemonEvolution(id);
      return {
        props: {
          evolution,
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

export default function Pokemon({ evolution }: IPageProps) {
  return (
    <Wrapper>
      {evolution.map((pokemon, key) => {
        return (
          <Tree key={key} father={pokemon.pokemonInfo} sons={pokemon.sons} />
        );
      })}
    </Wrapper>
  );
}
