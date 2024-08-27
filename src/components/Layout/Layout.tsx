import { Container } from "./styles";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ILayout } from "../../interfaces/ILayout";

const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
