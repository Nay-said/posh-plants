import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductBaseURL } from '../enviroment'

const Product = () => {
  const params = useParams();

  useEffect(() => {
    console.log(`${ProductBaseURL}${params.id}`)
    // axios.get(`${ProductBaseURL}params.id`)
  })
  
  return (
    <div>
      Product ID: {params.id}
    </div>
  )
}
export default Product