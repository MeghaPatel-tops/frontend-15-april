import React from 'react'
import { NavLink } from 'react-router-dom'

function Employeeindex() {
  return (
    <div>
        <NavLink className={'bg-blue-600 px-2 py-1 text-white'} to={'/employee/create'}>Add New</NavLink>
    </div>
  )
}

export default Employeeindex