import { Home } from "./components/Home";
import { Beneficios } from "./components/Beneficios";
import { Respaldado } from "./components/Respaldado";
import { DesignFooter } from './components/DesignFooter';
import { HowItWorks } from './components/HowItWorks';
import { Community } from './components/Community';
import { Newsletter } from './components/Newsletter';

function App() {
  return (
    <>
      <Home />
      <Respaldado />
      <Beneficios />
      <HowItWorks />
      <Community />
      <DesignFooter />
      <Newsletter />
    </>
  );
}

export default App;
