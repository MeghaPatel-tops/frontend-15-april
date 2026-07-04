import React from 'react'
import styled from 'styled-components'

function ProductCard(props) {
    const Card = styled.div`
        padding:10px;
        border:2px solid gray;
        border-radius:20px;
    `
    const singleProduct= props.sProduct
  return (
    <div>
        <Card>
        <h2>{singleProduct.name}</h2>
        <img src={singleProduct.image}></img>
        <p>Price:{singleProduct.price}</p>
        </Card>
    </div>
  )
}

export default ProductCard