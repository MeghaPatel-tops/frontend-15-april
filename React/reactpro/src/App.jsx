import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import EmpCreate from './Components/EmpCreate'
import EmpIndex from './Components/EmpIndex'
import EmpEdit from './Components/EmpEdit'
import CounterApp from './Components/CounterApp'
import CounterappReduce from './Components/CounterappReduce'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <div className="container border p-5">
             <Routes>
              <Route path='/employee' element={<EmpIndex/>}></Route>
                <Route path='/employee/create' element={<EmpCreate/>}></Route>
                <Route path='/employee/edit/:id' element={<EmpEdit/>}></Route>
                <Route path='/counter' element={<CounterApp/>}></Route>
                 <Route path='/counterreduce' element={<CounterappReduce/>}></Route>
             </Routes>
      </div>
   
    </>
  )
}

export default App
