import { ProductBaseURL } from '../enviroment'
import { allProducts, Hoyas, Aroids, NewProds, ProdsOnSale } from '../dummyData'

const Tabs = () => {
  const tabs = { 1: 'All', 2: 'Hoyas', 3: 'Aroids', 4: 'New', 5: 'Sale' }
  const tabData = { 1: allProducts, 2: Hoyas, 3: Aroids, 4: NewProds, 5: ProdsOnSale }

  const hashParam = window.location.hash.substring(1)
  hashParam && paramHandler(hashParam)
  const paramHandler = param => {
    const key = Object.keys(tabs).find(k => tabs[k] === param)
    setTabIndex(key)
    console.log(key)
  }

  return (
    <div>Tabs</div>
  )
}
export default Tabs