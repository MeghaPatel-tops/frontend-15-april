import React, { useState } from 'react'

function Counterapp() {
    const [count,setCount]=useState(0);
    const incre = ()=>{
        setCount(count+1)
    }
    const decre = ()=>{
        setCount(count-1)
    }
  return (
    <div>
        <fieldset>
            <legend>Counter app</legend>
            
            <button onClick={decre}>-</button>
            <span>{count}</span>
          <button onClick={incre}>+</button>
        </fieldset>
    </div>
  )
}

export default Counterapp