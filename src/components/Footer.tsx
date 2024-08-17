import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
  background-color: var(--secondary);
`;

const FooterText = styled.h4`
  color: #FFFFFF;
  text-align: center;
`;

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
