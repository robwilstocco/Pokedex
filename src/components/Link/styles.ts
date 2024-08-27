import Link from "next/link";
import styled from "styled-components";
import { ILink } from "../../interfaces/ILink";

export const StyledLink = styled(Link) <ILink>`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
