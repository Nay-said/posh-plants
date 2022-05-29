import React from 'react'

const Product = ({ productInfo, prodId }) => {
  return (
    <div id='product'>
      <a href={`/Product/${prodId}`}>
        <img src={productInfo.imgSrc} alt={`${productInfo.prodName}`} />
        <p id='product-name'>{productInfo.prodName}</p>
        <p id='product-price'>$ {productInfo.price}</p>
      </a>
    </div>
  )
}

export default Product