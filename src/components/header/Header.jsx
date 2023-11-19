import { Container, Main, Logo } from "./style";

export function Header(){
    return(
        <Container>
            <Main>
                <Logo>
                    <img src="../../../logo.svg" alt="logo" />
                </Logo>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                    <a href="#">Newsletter</a>
                </nav>
            </Main>
        </Container>
    )
}