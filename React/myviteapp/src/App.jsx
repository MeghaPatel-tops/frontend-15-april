import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Counterapp from './Components/Counterapp'
import ProductCatlog from './ProductCatlog'
import UserInfo from './Components/userInfo'
import Inlinecss from './Components/Inlinecss'
import Boxex from './Components/Boxex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <h1>Welocme to vite app</h1>
        <Home user={{name:"ABC",email:'abc@gmail.com','tel':'0909090909'}}/>
        <About />
        <Counterapp/> */}
        <ProductCatlog/>
        <Inlinecss/>
        <UserInfo/>
        <Boxex/>
    </>
  )
}

export default App
