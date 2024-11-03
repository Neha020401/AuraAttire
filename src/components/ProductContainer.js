import React from 'react'
import product from '../objects/products'

const ProductContainer = () => {
    const products = product.map((product)=>{
        return(
            <div key={product.id} className='trendsCard'>
            <div className='trendsImg-Container'>
            <img src={product.itemImg} alt='product' className='trendsImage'/> 
            </div>
            <h3 className='trendsName'>{product.itemName}</h3>
            <p  className='trendsColors' >{product.color}</p>
            {/* <p className=' trendsDetail'>Detail:- {product.details}</p>
            <p className=' trendsDetail'>Detail:- {product.description}</p> */}
            <button className='Cart-btn'>Add To Cart </button>
          </div>
        )
    })
  return (
    <div className='TrendsContainer grid'>
    {products}
    </div>
  )
}

export default ProductContainer
