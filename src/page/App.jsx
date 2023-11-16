import { Container } from "./style" 
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

function App() {
  return (
    
    <Container>
      <Header />
      <section>
          <h1>hello word</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, 
          quas eum. Tempora possimus voluptas quisquam minima asperiores nostrum, dolores reiciendis ex consectetur in? Debitis hic saepe, provident cupiditate molestiae ratione?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam ipsum sint unde fugit officia magnam debitis corporis ab tenetur necessitatibus, a sed eveniet eius cupiditate culpa recusandae provident asperiores.</p>

          <button>legal</button>
      </section>
      <section>
        
      </section>
      
      <Footer />
    </Container>
    
    
  )
}

export default App
