import { GetServerSidePropsContext } from "next";
import Card from "../../src/components/Card/Card";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import { getPokemonDetail } from "../../src/api";
import { ICard } from "../../src/interfaces/ICard";
import { Button, ButtonWrapper } from "../../src/components/Button/Button";

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
    <Wrapper>
      <ButtonWrapper>
        <Button id={pokemon.id} to="last" />
        <Button id={pokemon.evolution_chain_id} to="evolution" />
        <Button id={pokemon.id} to="next" />
      </ButtonWrapper>
      <Card {...pokemon} />
    </Wrapper>
  );
}
