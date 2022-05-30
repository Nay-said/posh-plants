import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserBaseURL } from '../enviroment'
import { isDisabled } from '../service'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: ''
  })
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const { name, email, password, confPassword } = formData
  let navigate = useNavigate()

  const onInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    setFail(false)
    axios.post(`${UserBaseURL}`, formData)
      .then(res => {
        setSuccess(true)
        setTimeout(() => {
          navigate('/Login')
          window.location.reload()
        }, 2000);
      })
      .catch(err => {
        console.log(err)
        setFail(true)
      })
  }

  const passwdMatch = () => formData.password === formData.confPassword

  return (
    <div className="user-form-wrap">
      <h3>Register Your Account</h3>
 
      <form onSubmit={onSubmit}>
        <hr />
        <div className='user-formgroup'>
          <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Your user name' onChange={onInputChange} />
          <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Your Email' onChange={onInputChange} />
          <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Set your password' onChange={onInputChange} />
          <input type="password" className='form-control' id='confPassword' name='confPassword' value={confPassword} placeholder='Confirm your password' onChange={onInputChange} />
        </div>
        {
          !passwdMatch() && <p className='text-danger'>Password does not match!</p>
        }
        { success ?
          <span id="Success" className="text-success">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className='mt-3'>
              <i className="bi bi-check-circle-fill"></i> &nbsp;
              Great!<br /> Your account is ready <br /> 
              You will be redirected in a second
            </p>
          </span>
        :
          <button type="submit" className="btn btn-outline-secondary" disabled={isDisabled(formData) || !passwdMatch()}>
            Sign Up
          </button>
        }
        { fail && 
          <div id="Error" className="text-danger">
            <i className="bi bi-x-circle-fill"></i>
            <p>Error!<br />Please check your credentials</p>
          </div>
        }
      </form>
    </div>
  )
}

export default Signup