import styled from "styled-components";

const FooterStyled = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--secondary);
`;

const FooterText = styled.h4`
  color: #FFFFFF;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <FooterText>
        All content & design © Pokémon images & names © 1995-2023 Nintendo/Game Freak. © 2023
      </FooterText>
    </FooterStyled>
  );
}
