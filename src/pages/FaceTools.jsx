import React from 'react'
import Navbar from '../components/Navbar'
import { products } from '../utils/constants'
import ProductCard from '../components/ProductCard'

const FaceTools = () => {
    const FaceProducts = products.filter((product) => product.category==='Face Tools')

  return (
    <div className='flex w-[80%] m-auto mt-20 md:w-full  '>
     <ProductCard products={FaceProducts}/>
    </div>
  )
}

export default FaceTools
