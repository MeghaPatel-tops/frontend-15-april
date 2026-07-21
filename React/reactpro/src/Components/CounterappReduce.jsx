import React, { useReducer } from 'react'
import Reducer,{initialState} from './Reducer'


function CounterappReduce() {
     const  [state,dispatch]= useReducer(Reducer,initialState )
    console.log(state);
    
    
  return (
    <div>
         <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 p-4 text-center"
        style={{ width: "350px", borderRadius: "20px" }}
      >
       {
          state.isLogged == false ?  <button className="btn btn-success px-4" onClick={()=>{
              dispatch({type:'Login'})
         }}>Login</button>:
         <div>
             <p>{state.loggedUser.name}</p>
              <button className="btn btn-success px-4" onClick={()=>{
              dispatch({type:'Logout'})
         }}>Logout</button>
         </div>
           
       }

      </div>
      <div
        className="card shadow-lg border-0 p-4 text-center"
        style={{ width: "350px", borderRadius: "20px" }}
      >
        <h2 className="fw-bold text-primary mb-4">Counter App</h2>

        <div className="display-1 fw-bold text-dark mb-4">
         {state.count}
        </div>

        <div className="d-flex justify-content-center gap-2">
          
         <button className="btn btn-success px-4" onClick={()=>{
              dispatch({type:'INCRE'})
         }}>
            <i className="bi bi-plus-lg"></i> +
          </button>
          <button className="btn btn-danger px-4" onClick={()=>{
              dispatch({type:'DECRE'})
         }}>
            <i className="bi bi-plus-lg"></i> -
          </button>
        </div>

        <button className="btn btn-warning mt-4 w-100 fw-semibold">
          Reset
        </button>
      </div>
    </div>
    </div>
  )
}

export default CounterappReduce