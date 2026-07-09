import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Fruits from './Components/Fruits'
import Product from './Components/Product'
import User from './Components/User'
import Userdata from './Components/Userdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Navbar/>
       <Hero/>
       <Project/> */}
       {/* <Fruits/> */}
       {/* <Product/> */}
       {/* <User/> */}
       <Userdata/>
    </>
  )
}

export default App
