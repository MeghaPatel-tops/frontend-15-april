import axios from 'axios';
import React, { useState } from 'react'

function EmpCreate() {
    const [emp,setEmp]=useState({});
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setEmp({
            ...emp,
            [name]:value
        })
    }

    // const handleClick = async(e)=>{
    //     e.preventDefault();
    //    try {
    //       let res = await axios.post('http://localhost:5000/employee',emp);
    //       if(res){
    //           console.log(res);
    //           alert("Employee created!")
              
    //       }
    //    } catch (error) {
    //         console.log(error);
            
    //    }
        
    // }
    const handleClick = async () => {
    

    try {
        const res = await axios.post("http://localhost:5000/employee", emp);
        console.log("Success", res);
        alert("Employee created!");
    } catch (err) {
        console.log("Error", err);
    }

    console.log("Function finished");
};
  return (
    <div>
        <fieldset>
            <legend>Employee Create</legend>
            <div className="col">
                <label htmlFor="">EmployeeName</label>
                <input type="text" name="EmployeeName" id="" onChange={handleChange} />

            </div>
            <button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    handleClick()
  }}
>
  Test
</button>
        </fieldset>
    </div>
  )
}

export default EmpCreate