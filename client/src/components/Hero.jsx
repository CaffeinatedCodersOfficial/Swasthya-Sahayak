import React from 'react'
import dnaimage from "../../public/dnaimage.png"
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='w-full h-[200dvh] pt-24 overflow-hidden flex flex-col justify-start items-center bg-white'>
      <div className='border-b-2 border-b-black/20 w-full h-[100dvh] rounded-b-full scale-110 flex justify-start flex-col items-center pt-20 relative bg-white'>

        {/* 🔵 Blue gradients */}
        <div className='rounded-full w-64 h-64 bg-blue-500 blur-3xl opacity-60 absolute top-10  z-0'></div>
        <div className='rounded-full w-64 h-64 bg-blue-500 blur-3xl opacity-60 absolute top-20 left-20 z-0'></div>
        <div className='rounded-full w-72 h-72 bg-blue-400 blur-3xl opacity-50 absolute bottom-20 right-40 z-0'></div>

        {/* 🔴 Red gradients */}
        <div className='rounded-full w-56 h-56 bg-red-500 blur-3xl opacity-50 absolute top-32 right-32 z-0'></div>
        <div className='rounded-full w-80 h-80 bg-pink-500 blur-3xl opacity-40 absolute bottom-32 left-32 z-0'></div>

        {/* Tagline */}
        <h3 className='bg-transparent backdrop-blur-md border-2 border-black/20 rounded-full px-4 py-3 font-bruno mb-16 relative z-10'>
          India&apos;s Most Adopted Healthcare Website
        </h3>

        {/* Hero Text */}
        <div className='flex flex-col gap-3 z-50 bg-transparent relative justify-center items-center mb-16'>
          <h1 className='font-bruno text-7xl bg-gradient-to-r from-black via-[#3737ff] to-black bg-clip-text text-transparent tracking-wider'>
            Revolutionizing
          </h1>
          <h1 className='font-bruno text-7xl bg-transparent'>
            <span className='font-bruno text-7xl text-[#ff3535] bg-gradient-to-r from-black via-[#ff1515] to-black bg-clip-text text-transparent'>
              Healthcare
            </span>{" "}
            With
          </h1>
          <h1 className='tracking-wider font-bruno text-7xl bg-gradient-to-r from-black via-[#000000] to-black bg-clip-text text-transparent'>
            Technology
          </h1>
        </div>
        <div className='flex justify-center items-center rounded-full  bg-white'>
            <form className='flex justify-center items-center rounded-full border-2 border-black/20 py-1 px-1 focus:border-black bg-white'>
                <input type="text" placeholder='Describe your problem' className='outline-none pl-3 pr-3 bg-transparent'/>
                <div className='w-[1.5px] h-6 bg-black/20'></div>
                <input type="text"
                    placeholder="Suffering since"
                    className='px-3 outline-none bg-transparent'/>
                <button className='bg-[#1d1d1d] text-white rounded-full px-3 py-3 hover:opacity-75'>Send to AI</button>
            </form>
        </div>
      </div>

      <div className='w-full h-[80dvh] flex justify-center items-center relative bg-transparent'>
       
        <div className='rounded-full w-64 h-64 bg-blue-500 blur-3xl opacity-60 absolute top-10 left-20 z-0'></div>
        <div className='rounded-full w-72 h-72 bg-blue-400 blur-3xl opacity-50 absolute bottom-5 right-20 z-0'></div>
         <div className='rounded-full w-56 h-56 bg-red-500 blur-3xl opacity-50 absolute top-24 right-[500px] z-0'></div>
        <div className='rounded-full w-80 h-80 bg-pink-500 blur-3xl opacity-40 absolute bottom-32 left-[400px] z-0'></div>
        <div className=' w-1/2 h-full pt-20 bg-cover relative bg-transparent' style={{backgroundImage: `url(${dnaimage})`}}>
          <p className='absolute top-20 right-20 bg-transparent text-2xl  font-michroma text-black/75 '>Timely Care With <br /> Virtual Consultation</p>
    
          <button className='absolute bottom-20 left-24 text-2xl bg-white/20 backdrop-blur-md rounded-full py-3 px-5 border-2 border-black/20 flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-all duration-150'>Book Consultant</button>
        </div>  
        <div className='w-1/2 h-full pt-20 bg-transparent'>
          <h3 className='text-3xl ml-14 font-michrome mt-20 mb-2 bg-transparent'>Live Well, Be Well</h3> 
          <p className='ml-14 pr-20 text-black/75 bg-transparent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur accusamus illum sapiente repudiandae! Enim at accusantium, alias quam ad quo exercitationem quis officia minima ullam a aliquam totam quibusdam!</p>

          <div className='ml-14 mt-10 flex justify-start items-center gap-20 bg-transparent'>
            <div className='flex justify-center items-start flex-col bg-transparent'>
              <h3 className='text-5xl bg-transparent'>100+</h3>
              <p className='ml-1 bg-transparent'>Hospitals</p>
            </div>
            <div className='flex justify-center items-start flex-col bg-transparent'>
              <h3 className='text-5xl bg-transparent'>1000+</h3>
              <p className='ml-1 bg-transparent'>Doctors</p>
            </div>
            <div className='flex justify-center items-start flex-col bg-transparent'>
              <h3 className='text-5xl bg-transparent'>10000+</h3>
              <p className='ml-1 bg-transparent'>Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
