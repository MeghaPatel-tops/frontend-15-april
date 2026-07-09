import React from 'react'
import bg1 from '../assets/bg1.jpg'
import person from '../assets/download.jpeg'

function Hero() {
  return (
     <div id="hero" >
        <div className="bg-[url('http://localhost:5173/src/assets/bg1.jpg')]  bg-no-repeat bg-cover">
      <div className="grid p-20 grid-cols-2">

        <div className="col">
                <h1 className='text-5xl font-extrabold text-blue-600'>Gopal Bawaskar</h1>
                <h2 className='text-2xl my-5'>Full Stack Developer</h2>
                <p className='text-xl my-5'>A full-stack developer is a tech professional who builds and maintains both the front-end (client-side) and back-end (server-side) of a website or application.</p>
                <button className='border border-blue-600 px-5 py-3 text-blue-600 rounded'>Download Cv</button>
        </div>
        <div className="mx-auto ">
              <img src={person} alt="person image" height={"400px"} width={"400px"} className='rounded-full'/>
        </div>
           
      </div>

     
      
    </div>
     <div className="skill p-20">
        <h2 className='text-3xl text-blue-600'>Skill</h2>
          <ul className='flex gap-10'>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Html</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Css</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Js</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>React</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Java</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>C</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>C++</li>
             
              
          </ul>
          <h2 className='text-3xl text-blue-600 '>Framework</h2>
            <ul className='flex gap-10'>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Spring boot</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Bootstrap</li>
              <li className='px-3 py-1 rounded-full border border-blue-600'>Tailwind</li>
              
            </ul>
              
             <h3 className='text-3xl text-blue-600 mb-1'>Database</h3>
               <ul className='flex gap-10 '>
              <li className='px-3 py-1 rounded-full border border-blue-600'>SQL</li>
                <li className='px-3 py-1 rounded-full border border-blue-600'>MongoDB</li>
            
             
              </ul>
             
      </div>
     </div>
  )
}

export default Hero