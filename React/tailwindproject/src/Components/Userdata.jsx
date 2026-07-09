import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Userdata() {
    const [users,setUsers]=useState([]);

    const getUsers = async()=>{
        try {
            let res = await axios.get('https://fakestoreapi.com/users');
            console.log(res.data);
            setUsers(res.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <div className='p-20'>
        <h1 className='text-3xl'>User Name</h1>
        <ul>
            {
                users && users.map((index,i)=>(
                    <li key={i}>{index.username}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Userdata