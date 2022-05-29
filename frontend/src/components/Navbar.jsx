import { useEffect, useState } from 'react'
import { getAuthToken } from '../service'
import '../styles/Navbar.css'
import Dialog from './Dialog'

const Navbar = () => {
  const [userToken, setUserToken] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  
  useEffect(() => {
    const token = getAuthToken()
    token && setUserToken(token)
  }, [userToken])

  const toggleDialog = () => setShowDialog(!showDialog)

  const signOut = () => {
    localStorage.removeItem('userToken-PoshPlants')
    localStorage.removeItem('userEmail-PoshPlants')
    localStorage.removeItem('userName-PoshPlants')
    window.location.reload()
  }

  return (
    <nav className="navbar navbar-expand navbar-light">
      <ul className="navbar-nav mb-2 mb-lg-0 d-none d-md-flex">
        <li className="nav-item pe-3">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link" href="/Shop/All">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
  
      <h1 id="logo">
        <a className="navbar-brand" href="/">Posh Plants</a>
      </h1>

      <section id="icons">
        <div id="search"><i className="bi bi-search"></i></div>
        <div id="user">
          { userToken ? 
            <span onClick={() => toggleDialog()}><i className="bi bi-person"></i></span>
            :
            <a href="/Login"><i className="bi bi-person-plus"></i></a>
          }
        </div>
        <div id="cart"><i className="bi bi-cart3"></i></div>
      </section>

      { showDialog && <Dialog onClose={toggleDialog} signOut={signOut} /> }
    </nav>
  )
}

export default Navbar