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
    price: '',
    imgSrc: ''
  })
  const { prodName, price, imgSrc } = formData

  const onInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    axios.post(`${ProductBaseURL}`, formData, headerConfig)
      .then(res => {
        setSuccess(true)
        console.log(res)
      })
      .catch(err => {
        setFail(true)
        console.log(err)
      })
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
            <input onChange={onInputChange} type="number" name="price" id='price' className="form-control" placeholder="Set price of new product" />
          </div>
          <div className="form-group">
            <label htmlFor="imgSrc" className="form-label">
              Image URL
            </label>
            <input onChange={onInputChange} type="text" name="imgSrc" id='imgSrc' className="form-control" placeholder="Paste in imge URL" />
          </div>
          <p style={{fontSize: '10px', wordWrap: 'break-word', }}>
            <i>Sample imge for testing: <br /> <small style={{fontSize: '6px'}}>https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg</small></i>
          </p>
          { success ?
            <span id="Success" className="text-success">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className='mt-3'>
                <i className="bi bi-check-circle-fill"></i> &nbsp;
                Product created!
              </p>
            </span>
            :
            <div className="text-center">
              <button type="submit" className="btn btn-outline-secondary" disabled={isDisabled(formData)}>
                Create
              </button>
            </div>
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