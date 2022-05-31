import axios from 'axios'
import { useState } from "react"
import Product from '../../components/Product'
import { headerConfig, isDisabled } from '../../service'
import { ProductBaseURL } from '../../enviroment'

const CreateProduct = () => {
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [formData, setFormData] = useState({
    prodName: '',
    price: 0,
    type: '',
    imgSrc: ''
  })
  const { prodName, price, type, imgSrc } = formData

  const onInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(newProduct)
    axios.post(`${ProductBaseURL}`, newProduct, headerConfig)
      .then(res => {
        setSuccess(true)
        console.log(res)
        removeSuccessInfo()
        setTimeout(() => e.target.reset(), 1000)
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

  const newProduct = {
    productName: prodName,
    price: parseFloat(price),
    type: type,
    imgSrc: imgSrc,
  }

  return (
    <section id="Create-Product" className="row">
      <div className="col-0 col-md-0 col-xl-2"></div>

      <div className="col-12 col-md-6 col-xl-4">
        <form onSubmit={onSubmit} >
          <div className="form-group">
            <label htmlFor="prodName" className="form-label">
              Product Name
            </label>
            <input onChange={onInputChange} type="text" name="prodName" id='prodName' className="form-control" placeholder="Enter name of new product" />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input onChange={onInputChange} type="number" name="price" id='price' className="form-control" placeholder="Set price of new product" min="0" />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Prouduct Type
            </label>
            <select onChange={onInputChange} name="type" id="type" className="form-select" defaultValue={"0"}>
              <option value="0" disabled>Choose a type</option>
              <option value="Hoya">Hoya</option>
              <option value="Arodios">Arodios</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imgSrc" className="form-label">
              Image URL
            </label>
            <input onChange={onInputChange} type="text" name="imgSrc" id='imgSrc' className="form-control" placeholder="Paste in imge URL" />
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn btn-outline-secondary" disabled={isDisabled(formData)}>
              Create
            </button>
            <button onClick={() => resetForm()} type="reset" className="btn btn-outline-warning ms-3">
              Reset
            </button>
          </div>
          { success &&
            <span id="Success" className="text-success">
              <p className='mt-3'>
                <i className="bi bi-check-circle-fill"></i> &nbsp;
                Product created!
              </p>
            </span>
          }
          { fail && 
            <div id="Error" className="text-danger">
              <i className="bi bi-x-circle-fill"></i>
              <p>Error!<br />Something went wrong, refer to console</p>
            </div>
          }
        </form>
      </div>

      <div id="Product-Preview" className="col-12 col-md-6 col-xl-4">
        <h6>Preview</h6>
        <Product productInfo={formData} />
      </div>

      <div className="col-0 col-md-0 col-xl-2"></div>
      <hr />
    </section>
  )
}
export default CreateProduct