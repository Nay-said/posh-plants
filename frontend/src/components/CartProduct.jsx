const CartProduct = ({ product, onRemove }) => {
  return (
    <div className="cart-prod">
      <div onClick={() => onRemove(product)} className="remove-cart-item d-inline-block">
        <i className="bi bi-x-circle text-danger me-2"></i>
      </div>
      <img src={product.imgSrc} alt={product.productName} />
      <span className="ms-1">{product.quantity} x {product.productName}</span>
      <p className="mt-3 ms-3"><i>$ {product.price} /Each</i></p>
      <hr />
    </div>
  )
}
export default CartProduct