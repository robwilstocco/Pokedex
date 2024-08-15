import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100%;
  /* padding-top: 80px;
  padding-bottom: 50px; */
  background-color: var(--background);
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
