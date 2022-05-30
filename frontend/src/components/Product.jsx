import React from 'react'

const Product = ({ productInfo, prodId }) => {
  return (
    <div id='product'>
      <a href={`/Product/${prodId}`}>
        { productInfo.imgSrc ? 
            <img src={productInfo.imgSrc} alt={`${productInfo.prodName}`} />
          :
            <img src="https://cutewallpaper.org/24/image-placeholder-png/index-of-assetsimg.png" alt="Error" />
        }
        { productInfo.prodName ? 
            <p id='product-name'>{productInfo.prodName}</p>
          :
            <p id='product-name'><i>Product Name</i></p>
        }

        <p id='product-price'>$ {productInfo.price}</p>
      </a>
    </div>
  )
}

export default Product