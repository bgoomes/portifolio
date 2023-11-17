import { Container } from "./style" 
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

function App() {
  return (
    
    <Container>
      <Header />
        <div>
          <section>
            <h1>obrunogomesreal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odio quis, repellat illum at obcaecati ipsam sit quo ab error? Veritatis, quae magnam. 
              Voluptatum qui neque animi magni, voluptatibus assumenda recusandae?
            </p>
          </section>

          <section>
            <img src="" alt="imagem sobre programação" />
          </section>
        </div>
      
      <Footer />
    </Container>
    
    
  )
}

export default App
