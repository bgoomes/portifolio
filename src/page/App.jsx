import { Container, Section } from "./style" 
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

function App() {
  return (
    
    <Container>
      <Header />
        
          <Section>
            <div className="text">
              <h1>Bem vindo(a)...</h1>
              <span>Bruno Gomes - Front-end Developer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quas commodi vero ullam reprehenderit
                 dolorem quos laborum. 
              </p>
            </div> 
            <figure>
              <img src="./assets/code.png" alt="foto" />
            </figure>
          </Section>
      <Footer />
    </Container>
    
    
  )
}

export default App
