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
          <p><i>{productInfo.type}</i></p>
          <div className="my-5">
            <span><strong>$ {productInfo.price}</strong></span>
  
            <button type="button" className="btn btn-outline-success ms-5">
              <i className="bi bi-cart-plus"></i> &nbsp;
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="my-3 pb-3">
        <h5>{productInfo.productName} - Product Detail</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit officiis accusamus necessitatibus dolore vitae optio veritatis error deleniti dolores soluta vel facere aliquid, perferendis fuga quod. A maxime optio, natus laudantium quibusdam aspernatur quidem explicabo praesentium, corrupti perspiciatis, non ratione enim quos sunt voluptatem animi! Voluptates magni sequi dolorem hic consequatur officiis at velit optio ullam. Dolorum exercitationem vel eligendi fugiat mollitia officiis modi magnam consequatur fuga molestiae asperiores a optio laboriosam ratione molestias, possimus, suscipit atque, illum iste id iure tempora in nobis quae. Consequatur, veniam maiores? Dolores nulla, commodi labore dolor fugiat quidem totam natus eaque! Ea, iste!
        </p>
      </div>
    </section>
  )
}
export default Product