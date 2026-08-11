import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, providerGoogle } from '../Firebase/db'

function Login() {
 
    const login = async()=>{
        try {
            let res = await signInWithPopup(auth,providerGoogle);
            console.log(res);
            console.log(res.user);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div>
        <button className='bg-green-400 px-10 py-5' onClick={login}>Login with Google</button>
    </div>
  )
}

export default Login