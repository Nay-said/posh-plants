import axios from 'axios'
import { useEffect, useState } from "react"
import { AdminTableRow } from '../../components/AdminTableRow'
import AdminEditDialog from '../../components/AdminEditDialog'
import { ProductBaseURL } from '../../enviroment'

const ProductManger = () => {
  const [products, setProducts] = useState([])
  const [showDialog, setShowDialog] = useState(false)
  const [dialogData, setDialogData] = useState({})

  useEffect(() => {
    axios.get(`${ProductBaseURL}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  const toggleDialog = (e, prod, param) => {
    setShowDialog(!showDialog)
    param === 'Success' && window.location.reload()
    !param && setDialogData(prod)
  }

  const handleDelete = prod => {
    const confirm = window.confirm(`Are you sure you want to delete product: ${prod.productName}?`)
    confirm && setProducts(products.filter(item => item._id !== prod._id)) 
    // axios.delete(`${ProductBaseURL}delete/${prod._id}`)
    //   .then(res => {
    //     console.log(res)
        
    //   })
    //   .err(err => console.log(err))
  }

  return (
    <div id="Product-Manager">
      <p className="text-danger">
        <i>*For dev and testing purposes, soft delete is implemented in this page temporarily. Everyting will come back on page refresh.</i>
      </p>
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          { products.map(prod => 
            <AdminTableRow prod={prod} toggleDialog={toggleDialog} onDelete={handleDelete} key={prod._id} />
          )}
        </tbody>
      </table>
      { showDialog && 
        <AdminEditDialog onClose={toggleDialog} data={dialogData} />
      }
    </div>
  )
}
export default ProductManger