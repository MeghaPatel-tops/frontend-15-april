"use client"

import axios from "axios";
import { useState } from "react";


function ProductCreate({msg,setMsg}) {
    const [product,setProduct]=useState({});
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }
    const handleClick=async()=>{
         try {
             let res = await axios.post('http://localhost:5000/products',product);
             if(res){
                setMsg("Product created successfully")
                setProduct({})
             }
         } catch (error) {
            
         }
    }
  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-8">
  <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">

    <h1 className="mb-2 text-2xl font-bold text-gray-800">
      Create Product
    </h1>

    <p className="mb-6 text-sm text-gray-500">
      Add a new product
    </p>

    <div className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Product Name
        </label>

        <input
          type="text"
          placeholder="Enter product name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          name='pname'
          value={product.pname ?? ''}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Price
        </label>

        <input
          type="number"
          placeholder="Enter price"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          name='price'
          value={product.price ?? ''}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows="5"
          placeholder="Enter product description"
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          name='desc'
          value={product.desc ?? ''}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex justify-end gap-3 pt-3">

        

        <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700" onClick={handleClick}>
          Create Product
        </button>

      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCreate