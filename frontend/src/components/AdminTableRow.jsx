export const AdminTableRow = ({ prod, toggleDialog, onDelete }) => {
  return (
    <tr>
      <td>{prod.productName}</td>
      <td>$ {prod.price}</td>
      <td>{prod.type}</td>
      <td><img src={prod.imgSrc} alt={prod.prodName} /></td>
      <td id="product-actions">
        <button onClick={(e) => toggleDialog(e, prod)} className="btn btn-outline-secondary">
          <i className="bi bi-pencil-square"></i> Edit
        </button>
        <button onClick={() => onDelete(prod)} className="btn btn-outline-danger">
          <i className="bi bi-trash3"></i> Delete
        </button>
      </td>
    </tr>
  )
}