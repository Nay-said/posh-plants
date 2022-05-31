import axios from 'axios'
import { useState } from "react"
import { ProductBaseURL } from '../enviroment'
import { headerConfig, isDisabled } from '../service'

const AdminEditDialog = ({ onClose, data }) => {
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [formData, setFormData] = useState({
    prodName: data.productName,
    price: data.price,
    type: data.type,
    imgSrc: data.imgSrc
  })
  const { prodName, price, type, imgSrc } = formData

  const newProduct = {
    productName: prodName,
    price: parseFloat(price),
    type: type,
    imgSrc: imgSrc,
  }

  const onInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(newProduct)
    axios.put(`${ProductBaseURL}${data._id}`, newProduct, headerConfig)
      .then(res => {
        setSuccess(true)
        console.log(res)
        removeSuccessInfo()
        setTimeout(() => onClose(e, null, 'Success'), 2000)
      })
      .catch(err => {
        setFail(true)
        console.log(err)
      })
  }

  const removeSuccessInfo = () => setTimeout(() => setSuccess(false), 3000)

  const resetForm = () => setFormData({
    prodName: '',
    price: 0,
    type: '',
    imgSrc: ''
  })

  return (
    <div id="Edit-Dialog">
      <div className="close-button" onClick={onClose}>
        <i className="bi bi-x"></i>
      </div>
      <div id="Edit-Dialog-Body">
        <h6>Edit Product <small><i>#{data._id}</i></small></h6>
        <hr />

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="prodName" className="form-label">
              Product Name
            </label>
            <input onChange={onInputChange} value={prodName} type="text" name="prodName" id='prodName' className="form-control" placeholder="Enter name of new product" />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input onChange={onInputChange} value={price} type="number" name="price" id='price' className="form-control" placeholder="Set price of new product" min="0" />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Prouduct Type
            </label>
            <select onChange={onInputChange} value={type} name="type" id="type" className="form-select">
              <option value="Hoya">Hoya</option>
              <option value="Arodios">Arodios</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imgSrc" className="form-label">
              Image URL
            </label>
            <input onChange={onInputChange} value={imgSrc} type="text" name="imgSrc" id='imgSrc' className="form-control" placeholder="Paste in imge URL" />
          </div>
          { imgSrc && 
            <div>
              <span>Image Preview</span>
              <div className="text-center mt-2">
                <img id="preview-img" src={data.imgSrc} alt=" Preview" />
              </div>
            </div>
          }
   
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-outline-secondary" disabled={isDisabled(formData)}>
              Update
            </button>
            <button onClick={() => resetForm()} type="reset" className="btn btn-outline-warning ms-3">
              Reset
            </button>
            { success &&
              <div id="Success" className="text-success">
                <span className='mt-3'>
                  <i className="bi bi-check-circle-fill"></i> &nbsp;
                  Product info updated!
                </span>
              </div>
            }
            { fail && 
              <div id="Error" className="text-danger">
                <i className="bi bi-x-circle-fill"></i>
                <p>Error!<br />Something went wrong, refer to console</p>
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  )
}
export default AdminEditDialog