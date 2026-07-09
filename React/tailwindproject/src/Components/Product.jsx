import React, { useState } from 'react'

function Product() {
    const [sProduct,setSproduct]= useState({})

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setSproduct({
            ...sProduct,
            [name]:value
        })
       
    }

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(sProduct);
        
    }
  return (
    <div>
        <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">

        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            Add Product
        </h2>

        <form class="space-y-5" onSubmit={handleClick}>

           
            <div>
                <label class="block mb-2 font-medium text-gray-700">
                    Product Name
                </label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    name='pname'
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                />
            </div>

         
            <div>
                <label class="block mb-2 font-medium text-gray-700">
                    Price
                </label>
                <input
                    type="number"
                    name='price'
                    placeholder="Enter price"
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     onChange={handleChange}
                />
            </div>

            <div>
                <label class="block mb-2 font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    rows="5"
                    name='decsription'
                    placeholder="Write product description..."
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                     onChange={handleChange}
                ></textarea>
            </div>

         
            <div class="flex justify-end">
                <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
                    
                >
                    Add Product
                </button>
            </div>

        </form>

    </div>
</div>
    </div>
  )
}

export default Product