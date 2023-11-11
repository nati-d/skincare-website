
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { BsCartPlus } from 'react-icons/bs';
import { addToCart } from '../features//slices/cartSlice';

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <Link to={`/productDetail/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2 text-black">{product.name}</h2>
          </Link>
          <div className="flex justify-between items-center">
            <span className="text-green-500 font-bold">${product.price}</span>
            <button
              className="bg-black text-white px-4 py-2 rounded-full text-center"
              onClick={() => handleAddToCart(product)}
            >
              <BsCartPlus className="text-xl font-bold" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
