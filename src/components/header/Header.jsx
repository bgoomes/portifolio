import { Container } from "./style";
import logo from '../../../public/logo.png'

export function Header(){
    return(
        <Container>
            <div>
                <figure>
                    <img src="" alt="logo" />
                </figure>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                    <a href="#">Newsletter</a>
                </nav>
            </div>
        </Container>
    )
}