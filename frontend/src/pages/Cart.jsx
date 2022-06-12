import { cartMessage, Links } from "../assets/frontendResources"
import BackButton from "../components/BackButton"
import CartProduct from "../components/CartProduct"
import PopUp from "../components/PopUp"
import { getAuthToken } from "../service"
import '../styles/Cart.css'

const Cart = ({ cartProds }) => {
  return (
  <>
    <section id="heading-bar">
      <BackButton />
      <span className="ms-3">Your Cart</span>
    </section>

    <div id="Cart">
      { !getAuthToken() &&
        <PopUp color={'bg-gray'} text={cartMessage} links={Links()} /> 
      }
      
      <section id="cart-body">
        { cartProds.length < 1 && 
          <h5>Your cart is empty <hr /></h5>
        }
        { cartProds.length > 0 && cartProds.map(prod => 
          <CartProduct product={prod} key={prod._id} /> 
        )}
      </section> 
  
      { cartProds.length > 0 &&
        <button className="btn btn-outline-success d-block mx-auto">
          <i className="bi bi-bag-check-fill me-2"></i>
          Checkout
        </button>
      }
    </div>
  </>
  )
}
export default Cart