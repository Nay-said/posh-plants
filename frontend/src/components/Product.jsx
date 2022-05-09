import React from 'react'

const Product = ({ productInfo }) => {
  return (
    <div id='product'>
      <img src={productInfo.imgSrc} alt="Our Product" />
      <p id='product-name'>{productInfo.prodName}</p>
      <p id="product-price">$ {productInfo.price}</p>
    </div>
  )
}

export default Product