import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const ProductDetail = ({ productInfo }) => {
  const [prod] = useState(() => 
    productInfo._id ? 
      productInfo 
    : 
      JSON.parse(sessionStorage.getItem('curProd'))
  )
  const navigate = useNavigate();
  
  useEffect(() => sessionStorage.setItem('curProd', JSON.stringify(prod)), [prod])

  return (
    <section id="Prod-Detil">
      <div id="Go-Back" onClick={() => navigate(-1)} className="btn btn-outline-secondary">
        <i className="bi bi-arrow-90deg-left"></i> &nbsp;
        Back
      </div>

      <div className="row mt-3">
        <div className="col-12 col-md-6">
          <img src={prod.imgSrc} alt={prod.productName} />
        </div>
  
        <div className="col-12 col-md-6 ps-md-5">
          <h3>{prod.productName}</h3>
          <p><i>{prod.type}</i></p>
          <div className="my-5">
            <span><strong>$ {prod.price}</strong></span>
  
            <button type="button" className="btn btn-outline-success ms-5">
              <i className="bi bi-cart-plus"></i> &nbsp;
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="my-3 pb-3">
        <h5>{prod.productName} - Product Detail</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit officiis accusamus necessitatibus dolore vitae optio veritatis error deleniti dolores soluta vel facere aliquid, perferendis fuga quod. A maxime optio, natus laudantium quibusdam aspernatur quidem explicabo praesentium, corrupti perspiciatis, non ratione enim quos sunt voluptatem animi! Voluptates magni sequi dolorem hic consequatur officiis at velit optio ullam. Dolorum exercitationem vel eligendi fugiat mollitia officiis modi magnam consequatur fuga molestiae asperiores a optio laboriosam ratione molestias, possimus, suscipit atque, illum iste id iure tempora in nobis quae. Consequatur, veniam maiores? Dolores nulla, commodi labore dolor fugiat quidem totam natus eaque! Ea, iste!
        </p>
      </div>
    </section>
  )
}
export default ProductDetail