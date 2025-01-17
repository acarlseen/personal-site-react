import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import HeroImage from './components/HeroImage'
import SideBar from './components/SideBar'
import { Skills } from './components/Skills'
import { GlowDiv } from './components/GlowDiv'
import { ContactUs } from './components/ContactMe'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <SideBar />
        <HeroImage />
        <GlowDiv />
        <Projects />
        <GlowDiv />
        <Skills />
        <GlowDiv />
        <Footer />
      </div>

    </>
  )
}

export default App
