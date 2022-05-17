import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: ''
  })

  const { name, email, password, confPassword } = formData

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
      <h3>Register Your Account</h3>
 
      <form onSubmit={onSubmit}>
        <hr />
        <div className='user-formgroup'>
          <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Your user name' onChange={onInputChange} />
          <input type="text" className='form-control' id='email' name='email' value={email} placeholder='Your Email' onChange={onInputChange} />
          <input type="text" className='form-control' id='password' name='password' value={password} placeholder='Set your password' onChange={onInputChange} />
          <input type="text" className='form-control' id='confPassword' name='confPassword' value={confPassword} placeholder='Confirm your password' onChange={onInputChange} />
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup