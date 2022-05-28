import React from 'react'
import '../styles/Home.css'

const Banner = ({ imgSrc, heading }) => {
  return (
    <div id="featured-product" className="col-12 col-md-6">
      <a href={`/shop#${heading}`}>
        <img src={imgSrc} alt="Our Product" />
        <div id='heading'>
          <h2>{heading}</h2>
            <p>Shop Now</p>
        </div>
      </a>
    </div>
  )
}

export default Banner