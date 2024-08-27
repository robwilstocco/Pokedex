import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MAX_POKEMON, MIN_POKEMON } from "../../../utils/globalConstants";
import { IButton } from "../../interfaces/IButton";
import { ButtonsWrapper, StyledButton } from "./styles";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export const ButtonWrapper = ({ children }: any) => {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
};

export const Button = ({ id, to }: IButton) => {
  const router = useRouter();

  const isDisabled = (id: number, destiny: string): boolean => {
    if (destiny === "last" && id === MIN_POKEMON) {
      return true;
    } else if (destiny === "next" && id === MAX_POKEMON) {
      return true;
    } else {
      return false;
    }
  };

  const redirectTo = (id: number, redirect: string): string => {
    if (redirect === "last") {
      return `/pokemon/${id - 1}`;
    } else if (redirect === "next") {
      return `/pokemon/${id + 1}`;
    } else {
      return `/evolution/${id}`;
    }
  };

  const content = (to: string): ReactElement => {
    if (to === "last") {
      return <FaArrowAltCircleLeft />;
    } else if (to === "next") {
      return <FaArrowAltCircleRight />;
    } else {
      return <p>{to}</p>;
    }
  };

  return (
    <StyledButton
      disabled={isDisabled(id, to)}
      onClick={() => router.push(redirectTo(id, to))}
    >
      {content(to)}
    </StyledButton>
  );
};
