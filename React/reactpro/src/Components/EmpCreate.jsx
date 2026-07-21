import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EmpCreate() {
    const [emp,setEmp]=useState({});
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setEmp({
            ...emp,
            [name]:value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            let res = await axios.post('http://localhost:3000/employees',emp);
            if(res){
                console.log(res);
                alert("Employee created")
                navigate('/employee')
            }
        } catch (error) {
            console.log(error);
            
        }
        
    }
  return (
    <div>
          <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card shadow border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
              <h3 className="mb-0">Employee Registration</h3>
            </div>

            <div className="card-body p-4">
              <form method='post' onSubmit={handleSubmit}>
                {/* Employee Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter employee name"
                    onChange={handleChange}
                  />
                </div>

                {/* Experience */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Experience
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="experience"
                    placeholder="e.g. 3 Years"
                    onChange={handleChange}
                  />
                </div>

                {/* Education */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Education
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="education"
                    placeholder="Enter education"
                    onChange={handleChange}
                  />
                </div>

                {/* Designation */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="designation"
                    placeholder="Enter designation"
                    onChange={handleChange}
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-2">
                

                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    Save Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EmpCreate