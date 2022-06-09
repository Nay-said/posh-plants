import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import SmallBanner from '../components/SmallBanner'
import TabPane from '../components/TabPane'
import PopUp from '../components/PopUp'
import { HoyaBanner, AroidsBanner, WelcomeMessage, Links } from '../assets/frontendResources'
import '../styles/Home.css'
import '../styles/PopUp.css'
import { getAuthToken } from '../service'
import { NewProds, salesProducts } from '../dummyData'

const Home = () => {
  const [tabIndex, setTabIndex] = useState(1)
  const [showWelcomeMessage, setWelcome] = useState(false)
  const tabType = { 1: NewProds, 2: salesProducts }
  const setActive = i => tabIndex === i ? 'tab active-tab' : 'tab'
  const dataForRander = tabIndex => tabType[tabIndex] ?? NewProds

  useEffect(() => {
    setTimeout(() => setWelcome(true), 2000)
  }, [showWelcomeMessage])

  return (
    <div id="Home-Page">
      {
        (showWelcomeMessage && !getAuthToken()) && 
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
          <div onClick={() => setTabIndex(1)}>
            <span className={setActive(1)}>New</span>
          </div>
          <div onClick={() => setTabIndex(2)}>
            <span className={setActive(2)}>Sale</span>
          </div>
        </div>

        <TabPane prodsForDisplay={dataForRander(tabIndex)} />
        
      </section>
    </div>
  )
}

export default Home 