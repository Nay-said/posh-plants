import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { UserBaseURL } from '../enviroment'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const { email, password  } = formData
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
    axios.post(`${UserBaseURL}login`, formData)
      .then(res => {
        setSuccess(true)
        setTimeout(() => {
          navigate('/')
          window.location.reload()
        }, 2000);
        localStorage.setItem('userToken-PoshPlants', res.data.token)
        localStorage.setItem('userEmail-PoshPlants', res.data.email)
        localStorage.setItem('userName-PoshPlants', res.data.name)
      })
      .catch(err => {
        console.log(err)
        setFail(true)
      })
  }

  // Check if all form fileds have value, if not disable login button
  const isDisabled = () => !Object.values(formData).every(prop => prop)
  
  return (
    <div className="user-form-wrap">
      <h3>Log in</h3>
    
      <form onSubmit={onSubmit}>
        <hr />
        <div className='user-formgroup'>
          <input type="text" className='form-control' id='email' name='email' value={email} placeholder='Your Email' onChange={onInputChange} />
          <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Your password' onChange={onInputChange} />
        </div>
        <p>
          Haven't got an account with us? &nbsp;
          <a href="/Signup">Sign up here</a>
        </p>
        { success ?
          <span id="Success" className="text-success">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className='mt-3'>
              <i className="bi bi-check-circle-fill"></i> &nbsp;
              Welcome back!<br />You will be redirected in a second
            </p>
          </span>
        :
          <button type="submit" className="btn btn-outline-secondary" disabled={isDisabled()}>
            Log In
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

export default Login  