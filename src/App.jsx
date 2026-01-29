import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Machines from './components/Machines';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Machines />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
