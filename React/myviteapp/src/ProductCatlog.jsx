import React from 'react'
import products from './Components/productsArray';
import ProductCard from './Components/ProductCard';

function ProductCatlog() {
    console.log(products);
    
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
        {
        products && products.map((index,i)=>(
            <ProductCard sProduct={index}/>
        ))
    }
    </div>
  )
}

export default ProductCatlog