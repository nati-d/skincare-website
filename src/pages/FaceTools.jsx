import React from 'react'
import { products } from '../utils/constants'
import ProductCard from '../components/ProductCard'

const FaceTools = () => {
    const FaceProducts = products.filter((product) => product.category==='Face Tools')

  return (
    <div className="flex md:w-[80%] md:m-auto mt-10 md:mt-20 w-full">
     <ProductCard products={FaceProducts}/>
    </div>
  )
}

export default FaceTools
