import React, { useEffect, useRef, useState } from 'react'

function FormExample() {
    const inputRef  = useRef()
    const [count,setCount]=useState(0)
    const countRef = useRef(0)
  
    console.log('render');
    
    useEffect(()=>{
        //console.log(inputRef.current);
        
        inputRef.current.focus();
    },[])
       
   

  return (
    <div>
        <form  >
            
            <input type="text" name="" id="" ref={inputRef}  className='p-10 border border-black-200' />
         </form>
            <fieldset>
                <legend>Counter app with useState</legend>
                <button className='p-4 bg-gray-600'
                onClick={()=>{
                    setCount(count+1)
                }}
                >+</button>{count}<button className='p-4 bg-gray-600'>-</button>
            </fieldset>
        <fieldset>
                <legend>Counter app with useRef</legend>
                <button className='p-4 bg-gray-600' onClick={()=>{
                      countRef.current= countRef.current+1;
                      console.log(countRef.current);
                      
                }}>+</button>{countRef.current}<button className='p-4 bg-gray-600'>-</button>
            </fieldset>
       
    </div>
  )
}

export default FormExample