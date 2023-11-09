import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { products } from '../utils/constants';

const AllProducts = () => {
    const Allproducts = products.filter((product) => product.category === 'Skincare' || product.category==='Face Tools');

  return (

    <div>
        <div className='flex w-[80%] m-auto mt-20 md:w-full  '>
        <ProductCard products={Allproducts}/>
        </div>
    </div>
  )
}

export default AllProducts
