"use client"
import axios from "axios";
import Navbar from "../Components/Navbar";
import ProductCreate from "../Components/ProductCreate";
import { useEffect, useState } from "react";

 export default  function Product() {
    const [products,setProducts]=useState([]);
    const [msg,setMsg]=useState(null);
    const getProduct = async()=>{
        const res = await axios.get("http://localhost:5000/products");
        const ProductArray = res.data;
        console.log(ProductArray);
        setProducts(ProductArray);
    }

    const deleteProduct = async(id)=>{
        const res = await axios.delete(`http://localhost:5000/products/${id}`);
        if(res){
            setMsg("Product Deleted");
        }
    }

useEffect(()=>{
    getProduct();

      return ()=>{
         setTimeout(()=>{
            setMsg(null)
         },2000)
      }
},[msg])
    
    return(
        <div>
            <Navbar/>
            {
                msg && <div className="mb-5 flex items-center rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
  <svg
    className="mr-3 h-5 w-5"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3.586-3.586z"
      clipRule="evenodd"
    />
  </svg>

  <div>
    <span className="font-semibold">Success!</span>
    <span className="ml-2">Product created successfully.</span>
  </div>
</div>
            }
            <ProductCreate   msg={msg} setMsg={setMsg}/>
        <div className="min-h-screen bg-gray-100 p-8">
            
  <div className="mx-auto max-w-6xl">

    <h1 className="mb-6 text-3xl font-bold text-gray-800">
      Product List
    </h1>

    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      <table className="w-full text-left">

        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-4">Product Name</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">

          
          {
            products && products.map((index,i)=>(
                <tr className="hover:bg-gray-50" key={i}>
            <td className="px-6 py-5 font-medium text-gray-800">
              {index.pname}
            </td>

            <td className="px-6 py-5 font-semibold text-green-600">
             {index.price}
            </td>

            <td className="px-6 py-5 text-gray-500">
              {index.desc}
            </td>

            <td className="px-6 py-5">
              <div className="flex justify-center gap-3">
                <button className="rounded-lg bg-blue-100 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white" >
                  Edit
                </button>

                <button className="rounded-lg bg-red-100 px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white" onClick={()=>{
                    deleteProduct(index.id)
                }}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
            ))
          }

        </tbody>
      </table>
    </div>

  </div>
</div>
</div>
    );
}