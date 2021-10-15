import "./App.css";
import { Container } from "./utils/GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
