import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Shop.css'
import TabPane from '../components/TabPane'
import { ProductBaseURL } from '../enviroment'
import { Routes, Route, NavLink } from "react-router-dom";
import { salesProducts } from '../dummyData'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${ProductBaseURL}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const tabProds = prodType => products.filter(prod => prod.type === prodType)

  const setActive = ({isActive}) => isActive ? activeClass : 'tab'
  const activeClass = 'tab active-tab'

  return (
    <>
      <section id='heading-bar'>
        <p>Shop</p>
      </section>

      <section id='tab-menu'>
        <NavLink to='/Shop/All' className={setActive}>All</NavLink >
        <NavLink to="/Shop/Hoyas" className={setActive}>Hoyas</NavLink>
        <NavLink to="/Shop/Aroids" className={setActive}>Aroids</NavLink>
        <NavLink to="/Shop/Accsory" className={setActive}>Accessories</NavLink>
        <NavLink to="/Shop/Sale" className={setActive}>Sale</NavLink>
      </section>

      <section>
        <Routes>
          <Route path='/All' element={
            <TabPane prodsForDisplay={products} tabName={'All'} /> 
          } />

          <Route path='/Hoyas' element={
            <TabPane prodsForDisplay={tabProds('Hoya')} tabName={'Hoya'} /> 
          } />

          <Route path='/Aroids' element={
            <TabPane prodsForDisplay={tabProds('Arodios')} tabName={'Arodios'} /> 
          } />

          <Route path='/Accsory' element={
            <TabPane prodsForDisplay={tabProds('Accessories')} tabName={'Accessories'} /> 
          } />

          <Route path='/Sale' element={
            <TabPane prodsForDisplay={salesProducts} tabName={'Sale'} /> 
          } />
        </Routes>
      </section>
    </>
  )
}

export default Shop