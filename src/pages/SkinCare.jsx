import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/constants';

const SkinCare = () => {
  // Filter products by category "Skincare"
  const skincareProducts = products.filter((product) => product.category === 'Skincare');

  return (
    <div className='flex w-[80%] m-auto mt-20 md:w-full  '>
      <ProductCard products={skincareProducts} />
    </div>
  );
}

export default SkinCare;
