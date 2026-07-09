import React, { useState } from 'react'

function Fruits() {
    const [fruits,setFruits]=useState(['apple','banana']);
    const [fname,setFname]=useState("");
    const [editId,setEditId]= useState(null);

    const handleChange = (e)=>{
        setFname(e.target.value)
    }
    const handleClick = ()=>{
       setFruits([...fruits,fname])
       setFname("")
    }

    const EditFruits= (i)=>{
        setFname(fruits[i])
        setEditId(i)
    }

    const handleUpdate=()=>{
         
           fruits[editId]=fname
          setFruits(fruits)
          setEditId(null)
          setFname("")
        
          
    }

    const DelFruits = (i)=>{
        let newArray = fruits.filter((index,ii)=>{
             if(i!=ii){
                return index
             }
        })
        console.log(newArray);
        setFruits(newArray)
        
    }
  return (
    <div className='mx-auto  border border-gray-700 p-20'>
        <h2 className='text-3xl'>Fruits list</h2>
        
             <ul class="space-y-4">
            {
                 fruits.map((index,i)=>(
                    

        
            <li key={i} class="bg-white shadow-md rounded-lg px-5 py-4 flex items-center justify-between hover:shadow-lg transition">

                <div>
                    <h3 class="text-lg font-semibold text-gray-800">
                       {index}
                    </h3>
                  
                </div>

                <div class="flex gap-3">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition" onClick={()=>{
                         EditFruits(i)
                    }}>
                        Edit
                    </button>

                    <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition" onClick={()=>{
                         DelFruits(i)
                    }}>
                        Delete
                    </button>
                </div>

            </li>

                ))
            }
           </ul>
           
        
        <fieldset>
            <legend>Add Fruits</legend>
            <label htmlFor="">Enter fruit name</label>
            <br />
            <input type="text" name="" id="" onChange={handleChange} className='border border-gray-900' value={fname} />
            <button onClick={handleClick}>Add</button>
             <button onClick={handleUpdate}>Update</button>
        </fieldset>
    </div>
  )
}

export default Fruits