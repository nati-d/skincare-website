import React from 'react'

const Hero = () => {
  return (
    <div className='mt-10 pt-5 relative'>
      <p className='font-semibold ' style={{fontSize:150, letterSpacing:20}}>Perfect</p>
      <p className='font-semibold text-center ' style={{fontSize:150, letterSpacing:20}}>Skin</p>
      <div className='absolute w-10 h-18 top-2 right-0 bg-red-300 flex items-center justify-center'>
        <img src='../assets/1.jpg' alt="one" className='w-full h-full' />
      </div>
    </div>
  )
}

export default Hero
