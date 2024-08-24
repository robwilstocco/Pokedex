import { GetServerSidePropsContext } from "next";
import Card from "../../src/components/Card/Card";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import { getPokemonDetail } from "../../src/api";
import { ICard } from "../../src/interfaces/ICard";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  if (context?.params?.id) {
    try {
      const id = context.params.id.toString();
      const pokemon = await getPokemonDetail(id);
      return {
        props: {
          pokemon,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  }
};

export default function Pokemon({ pokemon }: ICard) {
  return (
    <Wrapper justify="space-around">
      <Card {...pokemon} />
    </Wrapper>
  );
}
