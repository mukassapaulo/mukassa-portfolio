import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Riskflow from './components/Riskflow'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Riskflow />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
