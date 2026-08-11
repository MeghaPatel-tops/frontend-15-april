import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteCategory, getCategory } from '../../utils/CategorySlice';

function CategoryIndex() {
  const dispatch = useDispatch();
    const {catArray,catLoader,catError,catMsg} =useSelector((state)=>state.category);
  

    useEffect(()=>{
        dispatch(getCategory())
    },[catArray,catMsg])
    
  return (
    <div>
      <NavLink to={'/category/create'}>+ Add New</NavLink>
      <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

      
        <div class="px-6 py-5 border-b border-gray-200">
            <h2 class="text-2xl font-bold text-gray-800">
                Category List
            </h2>
            <p class="text-sm text-gray-500 mt-1">
                Manage your product categories
            </p>
            <p>{ catMsg && catMsg}</p>
        </div>

        
        <div class="overflow-x-auto">
            <table class="w-full text-left">

              
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                            Category Name
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                            Image
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-gray-600 text-center">
                            Action
                        </th>
                    </tr>
                </thead>

             
                <tbody class="divide-y divide-gray-200">

                  {
                    catArray && catArray.map((index,i)=>(
                         <tr class="hover:bg-gray-50 transition">
                        <td class="px-6 py-4">
                            <span class="font-medium text-gray-800">
                                {index.name}
                            </span>
                        </td>

                        <td class="px-6 py-4">
                            <img
                                src={index.catimg}
                                alt="Clothing"
                                class="w-14 h-14 rounded-lg object-cover border"
                            />
                        </td>

                        <td class="px-6 py-4">
                            <div class="flex justify-center gap-2">

                               
                                <NavLink  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100" to={'/category/edit/'+index.id}>Edit</NavLink>

                                <button
                                    class="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100" onClick={()=>{
                                         dispatch(deleteCategory(index.id))
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
  )
}

export default CategoryIndex