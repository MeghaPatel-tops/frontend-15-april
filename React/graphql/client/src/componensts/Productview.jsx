import { useMutation, useQuery } from '@apollo/client/react'
import React from 'react'
import {  DELETE_PRODUCT, GET_PRODUCT } from '../util'
import { NavLink } from 'react-router-dom'

function Productview() {
    const {loading,error,data}=useQuery(GET_PRODUCT)
    const [delPro]= useMutation(DELETE_PRODUCT,{
        refetchQueries:[{query:GET_PRODUCT}]
    })
 const delProduct= (id)=>{
        delPro({
           variables:{id:id}
        })
  }

    if(loading){
      return(
        <p>Loading.....</p>
      )
  }
  if(error){
    console.log(error);
    
      return(
        <p>Error:{error}</p>
      )
  }
 
  return (
    <div>
       <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "15px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#2563eb", color: "#fff" }}>
              
              <th style={{ padding: "14px", border: "1px solid #ddd" }}>
                Product Name
              </th>
              <th style={{ padding: "14px", border: "1px solid #ddd" }}>
                Price
              </th>
              <th style={{ padding: "14px", border: "1px solid #ddd" }}>
                Description
              </th>
              <th style={{ padding: "14px", border: "1px solid #ddd" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                data&& data.products.map((index)=>(
                   <tr key={index.id}>
               

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  {index.pname}
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  ₹{index.price}
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  {index.desc}
                </td>

                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  <NavLink
                  to={'/product/edit/'+index.id}
                    style={{
                      padding: "8px 14px",
                      marginRight: "8px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#f59e0b",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </NavLink>

                  <button
                    style={{
                      padding: "8px 14px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#dc2626",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={()=>{
                      delProduct(index.id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
                ))
            }
        </tbody>
        </table>
    </div>
  )
}

export default Productview