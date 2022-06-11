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

const Home = ({ setProdDetail }) => {
  const [tabIndex, setTabIndex] = useState('New')
  const [showWelcomeMessage, setWelcome] = useState(false)
  const tabType = { New: NewProds, Sale: salesProducts }
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
          <div onClick={() => setTabIndex('New')}>
            <span className={setActive('New')}>New</span>
          </div>
          <div onClick={() => setTabIndex('Sale')}>
            <span className={setActive('Sale')}>Sale</span>
          </div>
        </div>

        <TabPane prodsForDisplay={dataForRander(tabIndex)} tabName={tabIndex} setProdDetail={setProdDetail} />
      </section>
    </div>
  )
}

export default Home 