import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/constants';

const SkinCare = () => {
  const skincareProducts = products.filter((product) => product.category === 'Skincare');

  return (
    <div className="flex md:w-[80%] md:m-auto mt-10 md:mt-20 w-full">
      <ProductCard products={skincareProducts} />
    </div>
  );
}

export default SkinCare;
