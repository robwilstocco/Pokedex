import { ReactNode } from "react";
import { IPokemon } from "./IPokemon";

export interface ISearchProviderProps {
  children: ReactNode;
  initialAllPokemon: IPokemon[];
  initialPage?: number;
}
