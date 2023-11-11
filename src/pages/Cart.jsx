import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../features/slices/cartSlice';
import { BsTrash, BsPlus, BsDash } from 'react-icons/bs';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Placeholder for shipping fee
  const shippingFee = 10; // You can replace this with your actual shipping fee logic

  return (
    <div className="container mx-auto my-10 p-4 md:p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="border-b border-gray-300 py-4 md:py-6 lg:py-8 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover rounded mr-4"
                />
                <div className="">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                    <div>
                      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-gray-600">{item.price}Br</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <BsDash />
                      </button>
                      <span className="mx-2 text-gray-800">{item.quantity}</span>
                      <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <BsPlus />
                      </button>
                    </div>
                    <span className="text-gray-800">{item.price * item.quantity}Br</span>
                    <button
                      className="text-red-500 hover:text-red-700 ml-4"
                      onClick={() => handleRemove(item.id)}
                    >
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
              Subtotal:
            </span>
            <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
              {subtotal}Br
            </span>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
              Shipping Fee:
            </span>
            <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
              {shippingFee}Br
            </span>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
              Total:
            </span>
            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-red-500">
              {subtotal + shippingFee}Br
            </span>
          </div>
          <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full text-center hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
