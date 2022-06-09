import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductBaseURL } from '../enviroment'

const Product = () => {
  const [productInfo, setProductInfo] = useState([])
  const params = useParams();

  useEffect(() => {
    axios.get(`${ProductBaseURL}/${params.id}`)
      .then(res => setProductInfo(res.data))
      .catch(err => console.log(err))
  })

  return (
    <section id="Prod-Detil">
      <div className="row mt-3">
        <div className="col-12 col-md-6">
          <img src={productInfo.imgSrc} alt={productInfo.productName} />
        </div>
  
        <div className="col-12 col-md-6 ps-md-5">
          <h3>{productInfo.productName}</h3>
          <p><i>- {productInfo.type}</i></p>
          <div className="my-5">
            <span><strong>$ {productInfo.price}</strong></span>
  
            <button type="button" className="btn btn-outline-success ms-5">
              <i className="bi bi-cart-plus"></i> &nbsp;
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Product