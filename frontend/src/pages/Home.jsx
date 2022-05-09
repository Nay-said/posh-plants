import React, { useState } from 'react'
import HighlightProduct from '../components/Home/HighlightProduct'
import TabPane from '../components/Tab'
import '../styles/Home.css'
import { NewProds, ProdsOnSale } from '../dummyData'

const Home = () => {
  const [tabIndex, setTabIndex] = useState(1)
  const tabType = { 1: NewProds, 2: ProdsOnSale }

  const setActive = i => tabIndex === i ? 'tab active-tab' : 'tab'

  const dataForRander = tabIndex => tabType[tabIndex] ?? NewProds

  return (
    <div id="Home-Page">
      <section className="row">
        <HighlightProduct imgSrc="https://kiwigardenermagazine.co.nz/wp-content/uploads/sites/4/2021/05/June-Hoya.jpg" heading="Hoya" />
        <HighlightProduct imgSrc="https://mymodernmet.com/wp/wp-content/uploads/2021/05/popular-houseplants-1.jpg" heading="Aroids"/>
      </section>

      <section className="row" id="category">
        <div className="col-12 col-md-6">
          <p className="all-other">All Other Plants</p>
        </div>
        <div className="col-12 col-md-6">
          <p className="accsry">Accessories</p>
        </div>
      </section>

      <section>
        <div id="tab-menu">
          <div className={setActive(1)} onClick={() => setTabIndex(1)}>New</div>
          <div className={setActive(2)} onClick={() => setTabIndex(2)}>Sale</div>
        </div>

        <TabPane prodsForDisplay={dataForRander(tabIndex)} />
        
        <div className="pt-3" style={{height: '500px'}}></div>
      </section>
    </div>
  )
}

export default Home 