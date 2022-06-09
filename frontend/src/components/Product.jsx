import React from 'react'

const Product = ({ productInfo }) => {
  return (
    <div id='product'>
      <a href={`/Product/${productInfo._id}`}>
        { productInfo.imgSrc ? 
            <img src={productInfo.imgSrc} alt={`${productInfo.productName}`} />
          :
            <img src="https://cutewallpaper.org/24/image-placeholder-png/index-of-assetsimg.png" alt="Error" />
        }
        { productInfo.productName ? 
            <p id='product-name'>{productInfo.productName}</p>
          :
            <p id='product-name'><i>Product Name</i></p>
        }

        <p id='product-price'>$ {productInfo.price}</p>
      </a>
    </div>
  )
}

export default Product