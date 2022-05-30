import { useEffect } from 'react'
import axios from 'axios'
import '../styles/Shop.css'
import TabPane from '../components/TabPane'
import { ProductBaseURL } from '../enviroment'
import { Routes, Route, NavLink } from "react-router-dom";
import { allProducts, Hoyas, Aroids, NewProds, ProdsOnSale } from '../dummyData'

const Shop = () => {
  const tabData = { 1: allProducts, 2: Hoyas, 3: Aroids, 4: NewProds, 5: ProdsOnSale }
  // const tabs = { 1: 'All', 2: 'Hoyas', 3: 'Aroids', 4: 'New', 5: 'Sale' }

  useEffect(() => {
    axios.get(`${ProductBaseURL}`)
      .then(res => {
        // console.log(res.data)
      })
  }, [])

  const dataForRander = tabIndex => tabData[tabIndex] ?? 'NewProds'

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
            <TabPane prodsForDisplay={dataForRander(1)} /> 
          } />

          <Route path='/Hoyas' element={
            <TabPane prodsForDisplay={dataForRander(2)} /> 
          } />

          <Route path='/Aroids' element={
            <TabPane prodsForDisplay={dataForRander(3)} /> 
          } />

          <Route path='/Accsory' element={
            <TabPane prodsForDisplay={dataForRander(4)} /> 
          } />

          <Route path='/Sale' element={
            <TabPane prodsForDisplay={dataForRander(5)} /> 
          } />
        </Routes>
      </section>
    </>
  )
}

export default Shop