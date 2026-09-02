"use client"
import { useState } from "react";

export default function Counter() {
     const [count,setCount]=useState(0);


     return(
        <div className="flex justify-center items-center flex-col gap-5 p-20">
            <h1>Counter app</h1>
            <button className="px-5 py-2 bg-blue-400" onClick={()=>{
                setCount(count+1)
            }}>+</button> <span>{count}</span>
        </div>
     )

}