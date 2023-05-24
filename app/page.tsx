import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white z-0 scroll-smooth overflow:hidden">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
