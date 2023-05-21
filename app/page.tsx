import { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

export const metadata: Metadata = {
  title: "Łukaszs Portfolio",
  description: "Welcome to Next.js",
};

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white z-0 scroll-smooth overflow:hidden">
      <Header />

      <section id="hero" className="md:snap-center">
        <Hero />
      </section>

      <section id="about" className="md:snap-center">
        <About />
      </section>

      <section id="experience" className="md:snap-center">
        <Experience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
