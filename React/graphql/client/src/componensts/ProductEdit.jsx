import { useMutation, useQuery } from '@apollo/client/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_PRODUCT, UPDATE_PRODUCT } from '../util'

function ProductEdit() {
    const editid = useParams().id
     const {data}=useQuery(GET_PRODUCT);
     const [product,setProduct]=useState({});
     const [upPro]=useMutation(UPDATE_PRODUCT,{
        refetchQueries:[{query:GET_PRODUCT}]
        }
     )

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
        upPro({
            variables:product
        })
        setTimeout(()=>{
             navigate('/product')
        },1000)
       
    }

     useEffect(()=>{
            if(data){
                const filterData = data.products.find((index)=>index.id===editid);
                //console.log(filterData);
                setProduct(filterData)
            //console.log(data);
            }
            
            
     },[data])
     
     
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
            value={product.pname}
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
            value={product.price}
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
            value={product.desc}
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

export default ProductEdit