import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Project from './Components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Hero/>
       <Project/>
    </>
  )
}

export default App
