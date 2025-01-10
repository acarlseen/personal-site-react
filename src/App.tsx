import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import HeroImage from './components/HeroImage'
import SideBar from './components/SideBar'
import { Skills } from './components/Skills'
import { GlowDiv } from './components/GlowDiv'

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
      </div>

    </>
  )
}

export default App
