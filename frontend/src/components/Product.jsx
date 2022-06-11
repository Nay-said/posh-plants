import { Link } from "react-router-dom";

const Product = ({ productInfo, setProdDetail }) => {
  return (
    <div id='product'>
      <Link to={`/Product/${productInfo._id}`} onClick={() => setProdDetail(productInfo)}>
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
      </Link>
    </div>
  )
}

export default Product