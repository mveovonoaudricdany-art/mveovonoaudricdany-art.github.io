import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";
import ScrollButtons from "../components/ScrollButtons";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollButtons />
    </>
  );
}
