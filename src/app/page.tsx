import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Contact, Experience, Footer, Projects, Recognition, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
