import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Gallery } from './components/Gallery/Gallery'
import { Experience } from './components/Experience/Experience'
import { NextEvent } from './components/NextEvent/NextEvent'
import { Atv } from './components/Atv/Atv'
import { Stays } from './components/Stays/Stays'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <NextEvent />
        <Atv />
        <Stays />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
