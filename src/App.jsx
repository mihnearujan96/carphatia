import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Gallery } from './components/Gallery/Gallery'
import { Experience } from './components/Experience/Experience'
import { NextEvent } from './components/NextEvent/NextEvent'
import { Atv } from './components/Atv/Atv'
import { Stays } from './components/Stays/Stays'
import { Contact } from './components/Contact/Contact'
import { FAQ } from './components/FAQ/FAQ'
import { Footer } from './components/Footer/Footer'
import { TermsPage } from './components/Legal/Terms'
import { PageSeo } from './components/PageSeo/PageSeo'
import { RouteScroller } from './components/RouteScroller/RouteScroller'

function HomePage() {
  return (
    <>
      <PageSeo />
      <RouteScroller />
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
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/termeni" element={<TermsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
