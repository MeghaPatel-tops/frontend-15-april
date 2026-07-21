import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

function Userdata() {
    const [users,setUsers]=useState([]);
    const [search,setSearch]=useState(null);

    const handleChange = (e)=>{
        setSearch(e.target.value)
        console.log(search);
        
    }

    const getUsers = async()=>{
        try {
            let res = await axios.get('https://fakestoreapi.com/users');
            console.log(res.data);
            setUsers(res.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const filterData = useMemo(()=>{
          if(search===null){
              return users;
          }
          else{
              let newArray = users.filter((index)=>{
                    if(index.username.includes(search)){
                          return index
                    }
              })
              return newArray;
          }
    },[search,users])

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <div className='p-20'>
        <h1 className='text-3xl'>User Name</h1>
       <div className="max-w-md mx-auto mt-10">
  <div className="relative">
    <input
      type="text"
      placeholder="Search products..."
      className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      onChange={handleChange}

    />

    {/* Search Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  </div>
</div>
        <ul>
            {
                filterData && filterData.map((index,i)=>(
                    <li key={i}>{index.username}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Userdata