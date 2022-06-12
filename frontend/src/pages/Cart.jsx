import { useState } from "react"
import { useEffect } from "react"
import { cartMessage, Links } from "../assets/frontendResources"
import BackButton from "../components/BackButton"
import CartProduct from "../components/CartProduct"
import PopUp from "../components/PopUp"
import { getAuthToken } from "../service"
import '../styles/Cart.css'

const Cart = ({ cartProds , onCartChange }) => {
  const [success, setSuccess] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const calcTotal = () => {
    let total = 0
    cartProds.map(prod => total += prod.quantity * prod.price)
    setTotalPrice(total)
  }

  const removeItem = prod => onCartChange(cartProds.filter(item => item._id !== prod._id))

  const checkOut = () => {
    setSuccess(true)
    setTimeout(() => setSuccess(false), 5000)
  }

  useEffect(() => calcTotal())

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
            <CartProduct product={prod} onRemove={removeItem} key={prod._id} /> 
          )}
          { cartProds.length > 0 && <h6>Total: $ {totalPrice}</h6> }
        </section> 
    
        { cartProds.length > 0 &&
          <button onClick={() => checkOut()} className="btn btn-outline-success d-block mx-auto">
            <i className="bi bi-bag-check-fill me-2"></i>
            Checkout
          </button>
        }

        { success &&
          <div id="Success" className="text-success mt-5 text-center">
            <i className="bi bi-check-circle-fill"></i> &nbsp;
            Thank you for your order!
          </div>
        }
      </div>
    </>
  )
}
export default Cart