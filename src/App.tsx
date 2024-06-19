import { Header } from './components/Header';
import { Home } from "./components/Home";
import { Beneficios } from "./components/Beneficios";
import { Respaldado } from "./components/Respaldado";
import { DesignFooter } from './components/DesignFooter';
import { HowItWorks } from './components/HowItWorks';
import { Community } from './components/Community';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Respaldado />
      <Beneficios />
      <HowItWorks />
      <Community />
      <DesignFooter />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
