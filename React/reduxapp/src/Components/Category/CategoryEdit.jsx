import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getCategoryById, updateCategory } from '../../utils/CategorySlice';

function CategoryEdit() {
    const navigate = useNavigate();
    const [cat,setCat]=useState({})
    const cid = useParams().cid;
    const dispatch= useDispatch();
    const {catLoader,singleCat,catMsg,catError}=useSelector((state)=>state.category)

      const handleChange = (e)=>{
            const {name,value,type}=e.target;
            if(type=='file'){
                const file = e.target.files[0];
                console.log(file);
                 const reader = new FileReader();
    
                reader.readAsDataURL(file);
                reader.onload=()=>{
                    setCat({
                        ...cat,
                        'catimg':reader.result
                    })
                }
            }
            else{
                setCat({
                    ...cat,
                    name:value
                })
            }
        }
    
        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(cat);
            dispatch(updateCategory({catdata:cat,cid:cid}))
            setTimeout(()=>{
              navigate('/category')
            },2000)
        }
    useEffect(()=>{
        dispatch(getCategoryById(cid))
      
    },[dispatch])

    useEffect(()=>{
         setCat(singleCat)
    },[singleCat])
  return (
    <div>
             <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200">
    
    {/* Header */}
    <div className="px-8 py-6 border-b">
      <h2 className="text-2xl font-bold text-gray-800">
        Create Category
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Add a new category with an image.
      </p>
    </div>

    {/* Form */}
    <form className="p-8 space-y-6" method='post' onSubmit={handleSubmit}>

      {/* Category Name */}
      <div>
        {
            catLoader && 'Loading...'
        }
        {
            catMsg &&   <p>{catMsg}</p>
        }
        {
            catError && <p>{catError}</p>
        }

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category Name
        </label>
        <input
          type="text"
          placeholder="Enter category name"
          name='catname'
          onChange={handleChange}
          value={cat.name}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
        />
      </div>

      {/* Category Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category Image
        </label>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition cursor-pointer">
          <input
            type="file"
            className="block w-full text-sm text-gray-600
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:bg-indigo-600 file:text-white
            file:cursor-pointer
            hover:file:bg-indigo-700"
            name='catimg'
            onChange={handleChange}
          />
          <img src={cat.catimg} alt="" height={'50px'} width={'50px'} />
          <p className="text-xs text-gray-500 mt-3">
            PNG, JPG, JPEG (Max 5MB)
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="reset"
          className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Save Category
        </button>
      </div>

    </form>
  </div>
</div>
    </div>
  )
}

export default CategoryEdit