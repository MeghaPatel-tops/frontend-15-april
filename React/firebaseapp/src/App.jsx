import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { NavLink, Route, Routes } from 'react-router-dom'
import Userindex from './Components/Userindex'
import Usercreate from './Components/Usercreate'
import UserEdit from './Components/UserEdit'
import Login from './Components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <nav>
        <ul>
          <NavLink to={"/user"}>Users</NavLink>
        </ul>
       </nav>
       

       <Routes>
        <Route path='/' element={<Login/>}></Route>
           <Route path='/user' element={<Userindex/>}></Route>
           <Route path='/user/create' element={<Usercreate/>}></Route>
           <Route path='/user/edit/:id' element={<UserEdit/>}></Route>
       </Routes>
    </>
  )
}

export default App
