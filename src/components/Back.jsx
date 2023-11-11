import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";


const itemsPerPage = 10;

const ProductCard = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="flex flex-wrap gap-10 justify-center mb-20 -z-50">
      {currentProducts.map((product) => (
        <Link to={`/productDetail/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="w-[300px] h-[350px] border-[2px] cursor-pointer border-white relative text-white"
          >
            <AiOutlineHeart className="absolute top-5 right-5 text-3xl cursor-pointer" />
            <div className="w-full h-[280px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p>{product.name}</p>
              <p className="font-extrabold text-xl cursor-pointer">{product.price} Br</p>
            </div>
          </div>
        </Link>
      ))}
      <div className="w-full flex justify-center mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination-container"}
          subContainerClassName={"pages pagination"}
          activeClassName={"bg-white text-black"}
          previousClassName={"border p-2"}
          nextClassName={"border p-2"}
          pageClassName={"border p-2 px-5"}
          breakClassName={"pagination-button"}
          previousLinkClassName={"pagination-link"}
          nextLinkClassName={"pagination-link"}
          pageLinkClassName={"pagination-link"}
          breakLinkClassName={"pagination-link"}
          className="flex gap-10"
        />
      </div>
    </div>
  );
};

export default ProductCard;