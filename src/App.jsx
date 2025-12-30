import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // Added flex flex-col and a solid background color
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <Navbar />
      
      {/* Each component is now a block in a vertical stack */}
      <Hero />
      <About />

      <Skills />
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;