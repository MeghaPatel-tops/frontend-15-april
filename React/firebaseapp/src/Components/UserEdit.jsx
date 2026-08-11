import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../Firebase/db';


function UserEdit() {
    const id = useParams().id;
    const [user,setUser] = useState({})
    // const [editData,setEditData]=useState({})
    const navigate = useNavigate();
    
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleClick = async(e)=>{
        e.preventDefault();
        try {
             const docRef = doc(db,"users",id);
             const res = updateDoc(docRef,user);
             navigate('/user')
        } catch (error) {
            
        }
        
    }

    const getUserById = async()=>{
        try {
            const docRef = doc(db,"users",id);
            const res = await getDoc(docRef);
            console.log(res.data());
           setUser(res.data())
           
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getUserById();
    },[])
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          User Registration
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Create your account
        </p>

        <form className="space-y-5" onSubmit={handleClick} method='post'>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name='username'
              onChange={handleChange}
              value={user.username ?? ''}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
                name='email'
              onChange={handleChange}
              value={user.email ?? ''}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your contact number"
                name='pwd'
              onChange={handleChange}
              value={user.pwd ?? ''}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?
          <span className="text-indigo-600 font-semibold cursor-pointer hover:underline ml-1">
            Login
          </span>
        </p>
      </div>
    </div>
    
    </div>
  )
}

export default UserEdit