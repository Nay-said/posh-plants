import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Shop.css'
import TabPane from '../components/TabPane'
import { ProductBaseURL } from '../enviroment'
import { Routes, Route, NavLink } from "react-router-dom";
import { salesProducts } from '../dummyData'

const Shop = ({ setProdDetail }) => {
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
        <div>
          <NavLink to='/Shop/All' className={setActive}>All</NavLink >
        </div>
        <div>
          <NavLink to="/Shop/Hoyas" className={setActive}>Hoyas</NavLink>
        </div>
        <div>
          <NavLink to="/Shop/Aroids" className={setActive}>Aroids</NavLink>
        </div>
        <div>
          <NavLink to="/Shop/Accsory" className={setActive}>Accessories</NavLink>
        </div>
        <div>
          <NavLink to="/Shop/Sale" className={setActive}>Sale</NavLink>
        </div>
      </section>

      <section>
        <Routes>
          <Route path='/All/*' element={
            <TabPane prodsForDisplay={products} tabName={'All'} setProdDetail={setProdDetail} /> 
          } />

          <Route path='/Hoyas/*' element={
            <TabPane prodsForDisplay={tabProds('Hoya')} tabName={'Hoya'} setProdDetail={setProdDetail} /> 
          } />

          <Route path='/Aroids/*' element={
            <TabPane prodsForDisplay={tabProds('Arodios')} tabName={'Arodios'} setProdDetail={setProdDetail} /> 
          } />

          <Route path='/Accsory/*' element={
            <TabPane prodsForDisplay={tabProds('Accessories')} tabName={'Accessories'} setProdDetail={setProdDetail} /> 
          } />

          <Route path='/Sale/*' element={
            <TabPane prodsForDisplay={salesProducts} tabName={'Sale'} setProdDetail={setProdDetail} /> 
          } />
        </Routes>
      </section>
    </>
  )
}

export default Shop