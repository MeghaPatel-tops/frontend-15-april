import { useMutation } from '@apollo/client/react';
import React, { useState } from 'react'
import { ADD_PRODUCT, GET_PRODUCT } from '../util';
import { useNavigate } from 'react-router-dom';

function Productindex() {
    const [product,setProduct]=useState({});
    const [addpro]= useMutation(ADD_PRODUCT,{
        refetchQueries:[{query:GET_PRODUCT}]
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:(name=="price")?parseFloat(value):value
        })
    }

    const handleClick =async ()=>{
        console.log(product);
       await addpro({
            variables:product
        })
   navigate('/product')
    }
  return (
    <div>
          <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Add Product
        </h2>

        {/* Product Name */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontWeight: "600",
              color: "#444",
            }}
          >
            Product Name
          </label>

          <input
            type="text"
            name='pname'
            onChange={handleChange}
            placeholder="Enter product name"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "15px",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>

        {/* Price */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontWeight: "600",
              color: "#444",
            }}
          >
            Price
          </label>

          <input
            type="text"
            placeholder="Enter price"
             name='price'
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "15px",
              boxSizing: "border-box",
            }}
          />
        </div>

      
         

        {/* Description */}
        <div style={{ marginBottom: "22px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontWeight: "600",
              color: "#444",
            }}
          >
            Description
          </label>

          <textarea
            rows="4"
             name='desc'
            onChange={handleChange}
            placeholder="Enter product description"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "15px",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          ></textarea>
        </div>

        {/* Button */}
        <button
          style={{
            width: "100%",
            padding: "13px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#2563eb",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
         onClick={handleClick}
        >
          Add Product
        </button>
      </div>
    </div>
    </div>
  )
}

export default Productindex