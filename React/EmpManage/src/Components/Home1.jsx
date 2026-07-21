import React, { useContext } from 'react'
import UserContext from '../feature/UserContext'
import { ThemeContext } from '../feature/ThemeContext'

function Home1() {
   const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div  style={{
        backgroundColor: theme=='light'?'white':'black',
        color:theme=='light'?'black':'white'
    }}>
       
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sed odit vitae nostrum, fugiat non! Dignissimos, reiciendis fuga! Incidunt aliquid quia porro iste voluptatum possimus distinctio in cupiditate temporibus minima.</p>
    </div>
  )
}

export default Home1