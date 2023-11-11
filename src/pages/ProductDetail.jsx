import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../utils/constants";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// Product Card Component
const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover mb-4 rounded-md"
      />
      <h4 className="text-md font-semibold">{product.name}</h4>
      <span className="text-gray-500">${product.price}</span>
    </div>
  </Link>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Get similar items based on the product category
  const similarItems = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 5); // Take the first 5 similar items

  return (
    <div className="w-full md:w-[80%] m-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center mb-24">
      <div className="md:col-span-1 lg:col-span-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] md:h-[700px] object-cover mb-4 rounded-md"
        />
      </div>
      <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-black">{product.name}</h2>
        <div className="flex mb-2 items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              {index + 1 <= Math.floor(product.rating) ? (
                <BsStarFill className="text-yellow-500" />
              ) : index + 0.5 === Math.floor(product.rating) + 0.5 ? (
                <BsStarHalf className="text-yellow-500" />
              ) : (
                <BsStar className="text-yellow-500" />
              )}
            </span>
          ))}
          <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">${product.price}</span>
          <button
            className="bg-yellow-500 text-white px-6 py-2 rounded-full text-center"
            onClick={() => console.log(`Add to cart: ${product.name}`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-[350px] md:w-[1500px] flex flex-col flex-1  m-auto mt-8">
        <h3 className="text-xl font-semibold mb-4">Similar Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {similarItems.map((product) => (
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
            
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default ProductDetail;
