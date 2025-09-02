import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import VantaCells from '../VantaBacgrounds/VantaCells';

const IntroPage = () => {
  return (
    <div className='bg-blue w-full h-screen relative flex justify-center items-center'>
      <VantaCells/>

      <div className='absolute rounded-3xl flex flex-col justify-center items-center bg-transparent backdrop-blur-sm px-10 py-20 border-cardbggray/50 border-2'>
        <h1 className='bg-transparent text-white text-5xl mb-5'>Transforming<span className='font-storyscript bg-transparent text-primaryRed'> Healthcare</span> With</h1>
        <div className="bg-gradient-to-r from-red-700 via-red-500 to-red-800 bg-clip-text text-transparent text-7xl font-archivo font-black mb-10">
          Swasthya Saarthi
        </div>

        <div className="bg-transparent flex justify-center items-center gap-10">
          {/* Sign Up Button */}
          <div className="bg-white/75 rounded-full p-2 transition-all duration-300 hover:bg-blue-500">
            <Link to="/register" className="bg-cardbggray px-5 py-4 rounded-full text-semibold text-xl flex justify-center items-center gap-2 transition-all duration-300 hover:bg-primaryBlue hover:text-white group">
              Sign Up
              <div className="bg-white p-2 rounded-full transition-all duration-300 group-hover:bg-primaryBlue">
                <MdOutlineArrowOutward className="bg-transparent text-xl transition-all duration-300 group-hover:text-white" />
              </div>
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="bg-white/75 rounded-full p-2 transition-all duration-300 hover:bg-blue-500">
            <Link to="/login" className="bg-cardbggray px-5 py-4 rounded-full text-semibold text-xl flex justify-center items-center gap-2 transition-all duration-300 hover:bg-primaryBlue hover:text-white group">
              Sign In
              <div className="bg-primaryBlue text-white p-2 rounded-full transition-all duration-300 group-hover:bg-primaryBlue">
                <MdOutlineArrowOutward className="bg-transparent text-xl transition-all duration-300 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>


      </div>
        
    </div>
  )
}

export default IntroPage