import React, { useState } from 'react'
import '../styles/Shop.css'
import TabPane from '../components/Tab'
import { allProduct, NewProds, ProdsOnSale } from '../dummyData'

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(1)
  const tabType = { 1: allProduct, 2: NewProds, 3: NewProds, 4: NewProds, 5: ProdsOnSale }
  console.log(window.location)

  const setActive = i => tabIndex === i ? 'tab active-tab' : 'tab'

  const dataForRander = tabIndex => tabType[tabIndex] ?? 'NewProds'

  const paramHandler = param => {}

  return (
    <div>
      <section id='heading-bar'>
        <p>Shop</p>
      </section>

      <section id='tab-menu'>
        <div className={setActive(1)} onClick={() => setTabIndex(1)}>All</div>
        <div className={setActive(2)} onClick={() => setTabIndex(2)}>Hoyas</div>
        <div className={setActive(3)} onClick={() => setTabIndex(3)}>Aroids</div>
        <div className={setActive(4)} onClick={() => setTabIndex(4)}>New</div>
        <div className={setActive(5)} onClick={() => setTabIndex(5)}>Sale</div>
      </section>

      <section>
        <TabPane prodsForDisplay={dataForRander(tabIndex)} />
      </section>

    </div>
  )
}

export default Shop