import React from 'react'
import Product from './Product'

const TabPane = ({ prodsForDisplay }) => {
  return (
    <div id='tab-pane'>
      {
        prodsForDisplay.map((prod, index) => 
          <Product productInfo={prod} key={index} prodId={index} />
        )
      }
    </div>
  )
}

export default TabPane