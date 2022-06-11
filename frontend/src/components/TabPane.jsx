import React from 'react'
import Product from './Product'

const TabPane = ({ prodsForDisplay, tabName, setProdDetail }) => {
  return (
    <div id='tab-pane'>
      {
        prodsForDisplay.length > 0 ?
          prodsForDisplay.map((prod, index) => 
            <Product productInfo={prod} setProdDetail={setProdDetail} key={index} />
          )
        :
        <h6>No produts available on {tabName}</h6>
      }
    </div>
  )
}

export default TabPane