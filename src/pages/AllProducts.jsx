import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/constants";

const AllProducts = () => {
  const Allproducts = products.filter(
    (product) => product.category === "Skincare" || product.category === "Face Tools"
  );

  return (
    <div>
      <div className="flex md:w-[80%] md:m-auto mt-10 md:mt-20 w-full">
        <ProductCard products={Allproducts} />
      </div>
    </div>
  );
};

export default AllProducts;