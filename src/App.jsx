import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">

      <Navbar />

      {/* HERO — no top padding, it's the entry */}
      <section>
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <About />
      </section>

      {/* SKILLS */}
      <section className="py-24 md:py-32">
        <Skills />
      </section>

      {/* PROJECTS — slightly more space */}
      <section className="py-28 md:py-36">
        <Projects />
      </section>

      {/* CONTACT */}
      <section className="py-24 md:py-32">
        <Contact />
      </section>

      {/* FOOTER — tighter */}
      <section className="pt-16 pb-8">
        <Footer />
      </section>

    </div>
  );
}

export default App;
