import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function EmpIndex() {
    const [emps, setEmps] = useState([])
    const [del,setDel]=useState(null)
    const getEmployee = async () => {
        try {
            let res = await axios.get('http://localhost:3000/employees');
            console.log(res);
            if (res) {
                setEmps(res.data)
            }

        } catch (error) {
            console.log(error);

        }
    }
    const deleteUser = async(id)=>{
         setDel(0)
        try {
            let res = await axios.delete('http://localhost:3000/employees/'+id);
            if(res){
                alert("Delete success")
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getEmployee();
    }, [del])
    return (
        <div>
            <div className="container py-4">
                <NavLink to='/employee/create' className="btn btn-primary">Add new</NavLink>
                <div className="card shadow border-0 rounded-4">
                    <div className="card-header bg-dark text-white py-3">
                        <h3 className="mb-0 text-center">Employee List</h3>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered align-middle text-center mb-0">
                                <thead className="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Employee Name</th>
                                        <th>Experience</th>
                                        <th>Education</th>
                                        <th>Designation</th>
                                        <th width="180">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        emps && emps.map((index, i) => (
                                            <tr>
                                                <td>{i+1}</td>
                                                <td>{index.name}</td>
                                                <td>{index.experience}</td>
                                                <td>{index.education}</td>
                                                <td>{index.designation}</td>
                                                <td>
                                                    
                                                    <NavLink className="btn btn-warning btn-sm me-2" to={`/employee/edit/${index.id}`}>✏️ Edit</NavLink>

                                                    <button className="btn btn-danger btn-sm" onClick={()=>{
                                                        deleteUser(`${index.id}`)
                                                    }}>
                                                        🗑 Delete
                                                    </button>
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
        </div>
    )
}

export default EmpIndex