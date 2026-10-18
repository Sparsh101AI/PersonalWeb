import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Places } from "./components/Places";
import { Hobbies } from "./components/Hobbies";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Chat } from "./components/chat/Chat";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Places />
        <Hobbies />
        <Skills />
      </main>
      <Contact />
      <Chat />
    </>
  );
}
