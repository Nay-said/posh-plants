import BackButton from "../components/BackButton"
import CartProduct from "../components/CartProduct"
import '../styles/Cart.css'

const Cart = ({ cartProds }) => {
  return (
  <>
    <section id="heading-bar">
      <BackButton />
      <span className="ms-3">Your Cart</span>
    </section>
    
    <div id="Cart">
      <section id="cart-body">
        { cartProds.map(prod => 
          <CartProduct product={prod} key={prod._id} /> 
        )}
      </section> 
  
      <button className="btn btn-outline-success d-block mx-auto">
        <i className="bi bi-bag-check-fill me-2"></i>
        Checkout
      </button>
      <button className="btn btn-outline-warning d-block mx-auto mt-3">
        <i className="bi bi-cart-x-fill me-2"></i>
        Clear
      </button>
    </div>
  </>
  )
}
export default Cart