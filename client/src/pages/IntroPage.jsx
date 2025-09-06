import React from 'react'
import Aurora from '../Backgrounds/Aurora'
import { Link } from 'react-router-dom'
const IntroPage = () => {
  return (
    <div className='w-full h-[100dvh] relative'>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className='absolute inset-0 bg-transparent flex justify-center items-center px-5 '>
        <div className='bg-transparent backdrop-blur-md py-8 px-5 rounded-3xl flex justify-center items-center flex-col md:px-10 border-2 border-white/25 '>
          <p className='bg-transparent text-white mb-2 text-lg text-center md:text-2xl'>Welcome To</p>
          <h1 className='bg-transparent text-center text-[blue] text-2xl md:text-5xl mb-2 md:mb-4 font-archivo'>Swasthya <span className='text-primaryRed font-archivo bg-transparent '>Sahayak</span></h1>
          <p className='bg-transparent text-white/75 text-center px-2 mb-5 md:mb-7 md:text-xl'>Transform your health with digital solutions</p>
          <Link to="/login" className='text-white border-2 bg-transparent border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 transition-all duration-150 hover:text-black font-semibold'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IntroPage