import './App.css'
import { DesignFooter } from './components/DesignFooter';
import { HowItWorks } from './components/HowItWorks';
import Header from './components/Header';
import { Community } from './components/Community';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {


  return (
    <>
      <Header/>
      <HowItWorks />
      <Community />
      <DesignFooter />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
