import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import BackButton from '../components/BackButton';

const ProductDetail = ({ productInfo, onAddToCart, cart }) => {
  const [success, setSuccess] = useState(false)
  const [qtyInCart, setQtyInCart] = useState(0)
  const [prod] = useState(() => 
    // After page refresh, get current prod info from storage 
    productInfo._id ? productInfo : JSON.parse(sessionStorage.getItem('curProd'))
  )
  
  // Save prod info into storage on page load in case page refreshes
  useEffect(() => sessionStorage.setItem('curProd', JSON.stringify(prod)), [prod])

  useEffect(() => {
    const indexInCart = param => 
      cart && cart.findIndex(element => element._id === param._id)
    const i = productInfo._id ? 
      indexInCart(productInfo) : indexInCart(prod)
    const currProdInCart = i > -1 ? cart[i] : {}
    currProdInCart && setQtyInCart(currProdInCart.quantity)
  }, [cart, productInfo, prod])

  const addToCart = () => {
    prod['quantity'] = 1
    onAddToCart(prod)
    setSuccess(true)
    removeSuccessInfo()
  }

  const removeSuccessInfo = () => setTimeout(() => setSuccess(false), 6000)

  return (
    <section id="Prod-Detil">
      <BackButton />
      <div className="row mt-3">
        <div className="col-12 col-md-6">
          <img src={prod.imgSrc} alt={prod.productName} />
        </div>
  
        <div className="col-12 col-md-6 ps-md-5">
          <h3>{prod.productName}</h3>
          <p><i>{prod.type}</i></p>
          <div className="my-5">
            <span><strong>$ {prod.price}</strong></span>
  
            <button onClick={() => addToCart()} type="button" className="btn btn-outline-success ms-5">
              <i className="bi bi-cart-plus"></i> &nbsp;
              Add to Cart
            </button>

            { qtyInCart > 0 &&
              <p className='mt-3 text-success'>
                <i>{qtyInCart} of this product in your cart</i>
              </p>
            }

            { success &&
              <div id="Success" className="text-success mt-5">
                <i className="bi bi-check-circle-fill"></i> &nbsp;
                Added to Cart!
                <br />
                <Link to={'/Cart'}>
                  <button className='btn btn-sm btn-outline-secondary mt-3'>
                  View your cart
                  </button>
                </Link>
              </div>
            }
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