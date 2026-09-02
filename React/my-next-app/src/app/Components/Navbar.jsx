import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='px-20 py-5 bg-blue-900 text-white'>
            <ul className='flex gap-5'> 
                    <Link href={"/about"}>About</Link>
                    <Link href={"/Contact"}>Contact</Link>
                     <Link href={"/Counter"}>Counter App</Link>
            </ul>
    </div>
  )
}

export default Navbar