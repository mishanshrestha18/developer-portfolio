import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <div className="border-t border-neutral-800/50" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
