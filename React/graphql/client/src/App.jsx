import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useQuery } from '@apollo/client/react'
import { GET_PRODUCT } from './util'
import { Route, Routes } from 'react-router-dom'
import Productindex from './componensts/Productindex'
import Productview from './componensts/Productview'
import ProductEdit from './componensts/ProductEdit'

function App() {
  const [count, setCount] = useState(0)
  // const {loading,error,data}=useQuery(GET_PRODUCT)

  

  return (
    <>
      <Routes>
        <Route path='/product' element={<Productview/>}></Route>
           <Route path='/product/create' element={<Productindex/>}></Route>
           <Route path='/product/edit/:id' element={<ProductEdit/>}></Route>
      </Routes>
    </>
  )
}

export default App
