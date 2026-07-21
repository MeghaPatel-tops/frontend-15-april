
import React, { useCallback, useState } from 'react'
import Button from './Button'

function CounterApp() {
    const [count,setCount]=useState(0);
    const incre =  useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
     <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 p-4 text-center"
        style={{ width: "350px", borderRadius: "20px" }}
      >
        <h2 className="fw-bold text-primary mb-4">Counter App</h2>

        <div className="display-1 fw-bold text-dark mb-4">
         {count}
        </div>

        <div className="d-flex justify-content-center gap-2">
          <Button incre={incre}/>

          <button className="btn btn-success px-4" onClick={()=>{
              setCount(count-1)
          }}>
            <i className="bi bi-plus-lg"></i> -
          </button>
        </div>

        <button className="btn btn-warning mt-4 w-100 fw-semibold">
          Reset
        </button>
      </div>
    </div>
  )
}

export default CounterApp