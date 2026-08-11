import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CategoryIndex from './Components/Category/CategoryIndex'
import Productindex from './Components/Product/Productindex'
import { NavLink, Route,Routes } from 'react-router-dom'
import CategoryCreate from './Components/Category/CategoryCreate'
import CategoryEdit from './Components/Category/CategoryEdit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='bg-gray-800 text-white px-20 py-10'>
            <NavLink to={'/category'}>Category</NavLink>
        </div>
        <Routes>
          <Route path='/category' element={<CategoryIndex/>}></Route>
           <Route path='/category/create' element={<CategoryCreate/>}></Route>
           <Route path='/category/edit/:cid' element={<CategoryEdit/>}></Route>
        </Routes>
    </>
  )
}

export default App
