import React from 'react'
import { BsArrowRight} from 'react-icons/bs';


const Hero = () => {
  return (
    <div className='mt-10 pt-5 relative flex flex-col flex-1'>
      <p className='font-semibold ' style={{fontSize:160, letterSpacing:20}}>Perfect</p>
      <p className='font-semibold text-center ' style={{fontSize:160, letterSpacing:20}}>Skin</p>
      <div className='absolute w-70 h-80 z-20 top-2 left-[60%] bg-red-300 flex items-center justify-center overflow-hidden ' style={{borderRadius:"30% 70% 49% 51% / 30% 30% 70% 70% "}}>
        <img src='https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="one" className='w-full h-full' />
      </div>
      <div className='absolute w-90 h-100 -z-4 top-12 left-[65%] bg-red-300 flex items-center justify-center overflow-hidden' style={{borderRadius:'30% 70% 69% 31% / 41% 38% 62% 59% '}}>
        <img src='https://images.pexels.com/photos/6663469/pexels-photo-6663469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="one" className='w-full h-full' />
      </div>
        <div className='flex justify-between place-items-end '>
      <div className='mt-20' style={{width:350}}>
        <h4 className='font-bold text-xl mb-5'>100% Vegan</h4>
        <p>Using a completely black background (#000000) can create a visually striking and elegant design, but it's essential to consider user </p>
      </div>
      <div className='flex items-center'>
        <p style={{textDecorationLine:'underline'}}>Skin Care</p>
        <BsArrowRight className='text-2xl'/>
      </div>
      </div>
    </div>
  )
}

export default Hero
