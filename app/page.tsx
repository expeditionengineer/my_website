import Image from "next/image";

import NavBar from "./navbar";
import Header from "./header";
import About from "./about";
import SlideShow from './slide_show';
import Skills from './skills';
import Contact from './contact';
import Projects from './projects';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col sm:items-start">
        <section className="flex ml-auto">
          <NavBar />
        </section>
        <section id="header" className="min-h-screen">
          <Header />
        </section>
        <section id="about" className="min-h-screen">
          <div className="flex flex-row gap-50">
            <div>
              <About /> 
            </div>
            <div>
              <SlideShow />
            </div>
          </div>
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>  
        <section id="contact" className="min-h-screen">
          <Contact />
        </section> 
      </main>
    </div>
  );
}
