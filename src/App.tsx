import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import HeroImage from './components/HeroImage'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <SideBar />
        <HeroImage />
        <Projects />
      </div>

    </>
  )
}

export default App
