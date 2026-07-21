import { lazy, Suspense, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
const Navbar = lazy(()=>import('./Components/Navbar'))
import Dashboard from './Components/Dashboard'
import { ThemeContext } from './feature/ThemeContext'
import Employeeindex from './Components/Employeeindex'
import EmpCreate from './Components/EmpCreate'


function App() {
  const {theme,setTheme}=useContext(ThemeContext)

  
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
         {/* <Navbar/> */}
    </Suspense>
   
    {/* <ul style={{display:'flex',gap:'20px'}}>
      <li><NavLink to={'/home'}>Home</NavLink></li>
      <li><NavLink to={'/about'}>About</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </ul> */}
    <div className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Your Content Here */}

     <Routes>
       <Route path='/' element={<Dashboard/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/home' element={<Home/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/employee' element={<Employeeindex/>}></Route>
           <Route path='/employee/create' element={<EmpCreate/>}></Route>
       </Routes>

  </div>
</div>
     
    </>
  )
}

export default App
