import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className='w-[100%] flex items-center justify-between py-2 mt-2 relative'>
      <div className='flex flex-1 justify-start gap-8 text-sm font-regular space-x-10 hidden md:block text-white'>
        <span
          onClick={() => handleMenuItemClick('ALL PRODUCTS')}
          className={`cursor-pointer ${selectedMenuItem === 'ALL PRODUCTS' ? 'text-slate-700' : ''}`}
        >
         <Link to='/all'>ALL PRODUCTS</Link> 
        </span>
        <span
          onClick={() => handleMenuItemClick('SKINCARE')}
          className={`cursor-pointer ${selectedMenuItem === 'SKINCARE' ? 'text-slate-700' : ''}`}
        >
                   <Link to='/skin'>SKINCARE</Link> 

        </span>
        <span
          onClick={() => handleMenuItemClick('FACETOOLS')}
          className={`cursor-pointer ${selectedMenuItem === 'FACETOOLS' ? 'text-slate-700' : ''}`}
        >
         <Link to='/face'>FACETOOLS</Link> 
        </span>
      </div>
      <AiOutlineMenu
        className='text-2xl cursor-pointer visible md:hidden'
        onClick={() => setModalVisible(true)}
      />
      <div className='flex flex-1 justify-center text-3xl font-bold'>
        <p onClick={()=> setSelectedMenuItem("")}><Link to='/'>RASHA</Link></p>
      </div>
      <div className='flex flex-1 justify-end gap-5 mr-4 text-xl'>
        <p><FiSearch /></p>
        <p><AiOutlineHeart /></p>
        <p><BsHandbag /></p>
      </div>

      {modalVisible && (
        <div className='absolute top-0 left-0 w-[80%] h-screen bg-white z-500'>
          <div className='relative h-full'>
            <RxCross1
              className='absolute top-4 right-4 text-black text-xl font-extrabold cursor-pointer'
              onClick={() => setModalVisible(false)}
            />
            <div className='text-black space-y-10 pt-20 px-10'>
              <p className='border-b-2 pb-3 cursor-pointer hover:bg-slate-700 px-2'>ALL PRODUCTS</p>
              <p className='border-b-2 pb-3 cursor-pointer hover:bg-slate-700 px-2'>SKINCARE</p>
              <p className='border-b-2 pb-3 cursor-pointer hover:bg-slate-700 px-2'>FACETOOLS</p>
            </div>
            <div className='flex flex-1 justify-center text-center text-black text-3xl font-bold absolute bottom-5 left-[30%]'>
              <p>RASHA</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Navbar;
