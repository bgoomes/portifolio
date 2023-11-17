import { Container } from "./style";

export function Header(){
    return(
        <Container>
            <div>
                <figure>
                    <img src="../../../logo.svg" alt="logo" />
                </figure>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                    <a href="#">Newsletter</a>
                </nav>
            </div>
        </Container>
    )
}