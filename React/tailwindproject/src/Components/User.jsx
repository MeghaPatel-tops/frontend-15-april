import React, { useEffect, useState } from 'react'

function User() {
    const [count,setCount]= useState(100)
    const [product,setProduct]=useState([])
    const handleChange = (e)=>{
        setCount(e.target.value)

    }
    const getProductData = ()=>{
       fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setProduct(json))
    }

    useEffect(()=>{
        console.log("Welocme to app")
        console.log("Welocme msg with count value"+count)
        getProductData();

        return()=>{
             console.log('components unmount');
             
        }
    },[count])

    //   useEffect(()=>{
    //     console.log("Welocme to app")
        
    // },[])
  return (
    <div className='p-20'>
        <input className="border border-gray-900" type="number" name="" id="" value={count} onChange={handleChange}/>

        <ul>
            {
                product && product.map((index,i)=>(
                    <li key={i}>{index.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default User