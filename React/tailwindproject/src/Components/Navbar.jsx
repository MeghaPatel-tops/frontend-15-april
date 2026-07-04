import React from 'react'

function Navbar() {
  return (
      <div className="flex sticky top-0 justify-between bg-gray-900 px-20 py-10 text-white">
            <div>
                <label htmlFor="" className='text-2xl'>MyProfile</label>
            </div>
            <nav className=' rounded'>
        <ul className='flex gap-5  text-xl'>
            
            <li><a href="#hero">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Education</a></li>
        </ul>
     </nav>
      </div>
  )
}

export default Navbar