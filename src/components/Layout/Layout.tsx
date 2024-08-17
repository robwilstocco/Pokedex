import { Container, Content } from "./styles";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import ILayout from "../../interfaces/ILayout";

const Layout = ({ children }: ILayout) => {
    return (
        <Container>
            <Header />
            <NavBar />
            <Content>
                {children}
            </Content>
            <Footer />
        </Container>
    );
}

export default Layout;