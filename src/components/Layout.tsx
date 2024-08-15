import Header from "./Header/Header";
import Footer from "./Footer";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";

const Wrapper = styled.main`
  min-height: 100vh;
`

export default function Layout({ children }) {
  return (
    <Wrapper >
      <Header />
      <NavBar />
      {children}
      <Footer />
    </Wrapper>
  );
}
