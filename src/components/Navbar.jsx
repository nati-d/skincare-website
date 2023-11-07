import React from 'react'
import { FiSearch} from 'react-icons/fi';
import { AiOutlineHeart} from 'react-icons/ai';
import { BsHandbag} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='w-[100%] flex items-center justify-between py-2 my-4'>
      <div className='flex flex-1 justify-start gap-8 text-sm font-regular'>
        <p>ALL PRODUCTS</p>
        <p>SKINCARE</p>
        <p>FACETOOLS</p>
      </div>
      <div className='flex flex-1 justify-center text-3xl font-bold'>
        <p>RASHA</p>
      </div>
      <div className='flex flex-1 justify-end gap-5 mr-4 text-xl'>
        <p><FiSearch/></p>
        <p><AiOutlineHeart/></p>
        <p><BsHandbag/></p>
      </div>
    </div>
  )
}

export default Navbar
