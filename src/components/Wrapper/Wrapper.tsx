import { Content } from "./styles";
import { IWrapper } from "../../interfaces/IWrapper";

const Wrapper = ({ children, direction = 'column', justify = 'center', align = 'center' }: IWrapper) => {
    return (
        <Content direction={direction} justify={justify} align={align}>
            {children}
        </Content>
    )
}

export default Wrapper;