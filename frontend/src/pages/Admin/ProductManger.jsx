import axios from 'axios'
import { useState } from "react"
import { headerConfig, isDisabled } from '../../service'
import { ProductBaseURL } from '../../enviroment'

const ProductManger = () => {
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
    <div id="Product-Manager">
      Manage products here
    </div>
  )
}
export default ProductManger