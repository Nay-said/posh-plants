// import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import { isAuthorised } from '../../service'
import "../../styles/Admin.css"
import Dashboard from "./Dashboard";
import ProductManger from "./ProductManger";
import CreateProduct from "./CreateProduct";
import Users from "./Users"

const AdminPanel = () => {
  const setActive = ({isActive}) => isActive ? activeClass : 'tab'
  const activeClass = 'tab active-tab'

  return (
    isAuthorised() && 
      <div id="Panel">
        <h3>Admin Panel</h3>
        <hr />
       
        <section id="tab-menu">
          <NavLink to='/Admin/Dashboard' className={setActive}>
            BI Dashboard
          </NavLink >
          <NavLink to='/Admin/Products' className={setActive}>
            Manage Products
          </NavLink >
          <NavLink to='/Admin/New-Product' className={setActive}>
            New Product
          </NavLink >
          <NavLink to='/Admin/Users' className={setActive}>
            Users List
          </NavLink >
        </section>

        <section id="Panel-Body">
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Products' element={<ProductManger />} />
            <Route path='/New-Product' element={<CreateProduct />} />
            <Route path='/Users' element={<Users />} />
          </Routes>
        </section>

        <section className="text-center">
          <a href='/' className="btn btn-outline-danger">Exit</a>
        </section>
      </div>
  )
}
export default AdminPanel