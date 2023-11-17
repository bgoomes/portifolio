import { Container } from "./style" 
import { FiSend } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
 
export function Footer(){
    return(
        <Container>
          <div className="content">
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
            

            <div className="redes">
                <nav>
                   <a href=""><FaGithub /></a>
                   <a href=""><FaLinkedin /></a>
                   <a href=""><FaInstagram /></a>
                   

                </nav>
            </div>
          </div>
        </Container>
    )
}