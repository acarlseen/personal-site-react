import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import HeroImage from './components/HeroImage'
import SideBar from './components/SideBar'
import { RoundButton } from './components/RoundButton'
import { Carousel } from './components/Carousel'
import Carousel1 from './components/Carousel1'
import { Skills } from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <SideBar />
        <HeroImage />
        <Projects />
        <Skills />
      </div>

    </>
  )
}

export default App
