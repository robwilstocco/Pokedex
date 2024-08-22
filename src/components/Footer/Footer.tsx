import { FooterStyled, FooterText } from "./styles";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <FooterStyled>
      <FooterText>
        {`All content & design © Pokémon images & names © 1995-${year} Nintendo/Game Freak. © ${year}`}
      </FooterText>
    </FooterStyled>
  );
}
