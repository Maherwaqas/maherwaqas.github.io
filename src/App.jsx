import { Nav }          from './components/layout/Nav.jsx'
import { Footer }       from './components/layout/Footer.jsx'
import { Hero }         from './components/sections/Hero.jsx'
import { Experience }   from './components/sections/Experience.jsx'
import { Projects }     from './components/sections/Projects.jsx'
import { Publications } from './components/sections/Publications.jsx'
import { Skills }       from './components/sections/Skills.jsx'
import { Education }    from './components/sections/Education.jsx'
import { Contact }      from './components/sections/Contact.jsx'

/**
 * Root layout — single long-scroll page.
 * Sections are full-bleed (each controls its own background + inner max-width).
 * To add/remove/reorder sections, edit this file only.
 * All content lives in src/content/*.js — no need to touch components.
 */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
