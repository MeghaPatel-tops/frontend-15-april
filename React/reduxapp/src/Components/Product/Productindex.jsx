import React from 'react'
import { useSelector } from 'react-redux'

function Productindex() {
    const {singleCat}= useSelector((state)=>state.category)
    console.log(singleCat);
    
  return (
    <div>Productindex</div>
  )
}

export default Productindex