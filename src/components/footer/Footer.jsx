import { Container, Content, Redes } from "./style" 
import { FiSend } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
 
export function Footer(){
    return(
        <Container>
          <Content>
            <header>
                <span>Vamos conversar?</span>
                <p>
                    Tem alguma ideia que precisa tirar do papel, sinta-se a vontade para me mandar um mensagem, quem sabe eu possa ajudar!
                </p>
                
            </header> 
            <button>
                Fale comigo
                <FiSend />
            </button>
            

            <Redes>
                <nav>
                   <a href="https://github.com/bgoomes" target="_blank"><FaGithub /></a>
                   <a href="https://www.linkedin.com/in/obrunogomesreal/" target="_blank"><FaLinkedin /></a>
                   <a href="https://www.instagram.com/obrunogomesreal/" target="_blank"><FaInstagram /></a> 
                </nav>
            </Redes>
          </Content>
        </Container>
    )
}