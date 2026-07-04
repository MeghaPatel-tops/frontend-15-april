import React, { useState } from 'react'

function UserInfo() {
    const [name,setName]=useState("john");
    const addUsername=()=>{
        let username = prompt("Enter username");
        setName(username)
    }
  return (
    <div>userInfo
        <h2>UserName:{name}</h2>
        <button onClick={addUsername}>Add User name</button>
    </div>
  )
}

export default UserInfo