import { IconType } from "react-icons";

export interface ILink {
  children?: React.ReactElement | React.ReactElement[];
  href: string;
  onclick?: () => void;
}
