import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../feature/ThemeContext'

function Navbar() {
    const {theme,setTheme}=useContext(ThemeContext)
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-16">

      {/* Logo */}
      
      <NavLink className="text-2xl font-bold text-indigo-600 cursor-pointer" to="/">MovieRate</NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li>
        
          <NavLink className="hover:text-indigo-600 transition duration-300" to={'/home'}>Home</NavLink>
        </li>

         <li>
        
          <NavLink className="hover:text-indigo-600 transition duration-300" to={'/about'}>About</NavLink>
        </li>

  <li>
        
          <NavLink className="hover:text-indigo-600 transition duration-300" to={'/contact'}>Contact</NavLink>
        </li>


        <li>
          <a
            href="#"
            className="hover:text-indigo-600 transition duration-300"
          >
            Categories
          </a>
        </li>

        <li>
          
          <NavLink className="hover:text-indigo-600 transition duration-300" to={'/employee'}>About</NavLink>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
          Login
        </button>

        <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"  onClick={
            ()=>{
                setTheme(theme=='light'?'dark':'light')
            }
        }>
          {theme =="light"?'Dark':'Light'}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

    </div>
  </div>
</nav>
  )
}

export default Navbar