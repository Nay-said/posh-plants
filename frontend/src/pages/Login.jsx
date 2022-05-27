import { useState } from "react"
import axios from 'axios'
import { UserBaseURL } from '../enviroment'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password  } = formData

  const onInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    
    axios.post(`${UserBaseURL}login`, formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
    console.log(formData)
  }

  return (
    <div className="user-form-wrap">
      <h3>Log in</h3>
    
      <form onSubmit={onSubmit}>
        <hr />
        <div className='user-formgroup'>
          <input type="text" className='form-control' id='email' name='email' value={email} placeholder='Your Email' onChange={onInputChange} />
          <input type="text" className='form-control' id='password' name='password' value={password} placeholder='Set your password' onChange={onInputChange} />
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login  