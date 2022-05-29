import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import SmallBanner from '../components/SmallBanner'
import TabPane from '../components/TabPane'
import PopUp from '../components/PopUp'
import { HoyaBanner, AroidsBanner, WelcomeMessage, Links } from '../assets/frontendResources'
import { NewProds, ProdsOnSale } from '../dummyData'
import '../styles/Home.css'
import '../styles/PopUp.css'
import { authToken } from '../service'

const Home = () => {
  const [tabIndex, setTabIndex] = useState(1)
  const [showWelcomeMessage, setWelcome] = useState(false)
  const tabType = { 1: NewProds, 2: ProdsOnSale }
  const setActive = i => tabIndex === i ? 'tab active-tab' : 'tab'
  const dataForRander = tabIndex => tabType[tabIndex] ?? NewProds

  useEffect(() => {
    setTimeout(() => setWelcome(true), 2000)
  }, [showWelcomeMessage])

  return (
    <div id="Home-Page">
      {
        (showWelcomeMessage && !authToken) && 
          <PopUp color={'bg-gray'} text={WelcomeMessage()} links={Links()} />
      }
      
      <section id="Banners" className="row">
        <Banner imgSrc={HoyaBanner.imgSrc} heading={HoyaBanner.heading} />
        <Banner imgSrc={AroidsBanner.imgSrc} heading={AroidsBanner.heading} />
      </section>

      <section id="other-category" className="row" >
        <SmallBanner heading={'All Other Plants'} path={'All'} />
        <SmallBanner heading={'Accessories'} path={'Accsory'} />
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