import React from 'react'
import dnaimage from "../../public/dnaimage.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='w-full h-[200dvh] pt-24 overflow-hidden flex flex-col justify-start items-center bg-black text-white'>
      <div className='border-b-2 border-b-white/10 w-full h-[100dvh] rounded-b-full scale-110 flex justify-start flex-col items-center pt-20 relative bg-gradient-to-b from-black via-gray-900 to-black'>

        {/* 🔵 Blue gradients */}
        <div className='rounded-full w-64 h-64 bg-blue-500 blur-3xl opacity-40 absolute top-10  z-0'></div>
        <div className='rounded-full w-64 h-64 bg-blue-500 blur-3xl opacity-30 absolute top-20 left-20 z-0'></div>
        <div className='rounded-full w-72 h-72 bg-blue-400 blur-3xl opacity-20 absolute bottom-20 right-40 z-0'></div>

        {/* 🔴 Red gradients */}
        <div className='rounded-full w-56 h-56 bg-red-500 blur-3xl opacity-30 absolute top-32 right-32 z-0'></div>
        <div className='rounded-full w-80 h-80 bg-pink-500 blur-3xl opacity-20 absolute bottom-32 left-32 z-0'></div>

        {/* Tagline */}
        <h3 className='bg-transparent backdrop-blur-md border-2 border-white/20 rounded-full px-5 py-3 font-bruno mb-16 relative z-10 text-gray-200'>
          India&apos;s Most Adopted Healthcare Ecosystem
        </h3>

        {/* Hero Text */}
        <div className='flex flex-col gap-3 z-50 bg-transparent relative justify-center items-center mb-16'>
          <h1 className='font-bruno text-7xl bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent tracking-wider'>
            Revolutionizing
          </h1>
          <h1 className='font-bruno text-7xl bg-transparent'>
            <span className='font-bruno text-7xl bg-gradient-to-r from-white via-[#ff0000] to-white bg-clip-text text-transparent'>
              Healthcare
            </span>{" "}
            With
          </h1>
          <h1 className='tracking-wider font-bruno text-7xl bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent'>
            Technology
          </h1>
        </div>

        {/* Input form */}
        <div className='flex justify-center items-center rounded-full bg-transparent'>
          <form className='flex justify-center items-center rounded-full border-2 border-white/20 py-1 px-1 bg-gray-900/50 backdrop-blur-md'>
            <input 
              type="text" 
              placeholder='Describe your problem' 
              className='outline-none pl-3 pr-3 bg-transparent text-white placeholder-gray-400'
            />
            <div className='w-[1.5px] h-6 bg-white/20'></div>
            <input 
              type="text"
              placeholder="Suffering since"
              className='px-3 outline-none bg-transparent text-white placeholder-gray-400'
            />
            <button className='bg-blue-600 text-white rounded-full px-3 py-3 hover:bg-blue-500 transition-all'>
              Send to AI
            </button>
          </form>
        </div>
      </div>

      {/* Lower Section */}
      <div className='w-full h-[80dvh] flex justify-center items-center relative bg-transparent '>
        {/* Glows */}
        <div className='rounded-full w-64 h-64 bg-blue-500 blur-3xl opacity-30 absolute top-10 left-20 z-0'></div>
        <div className='rounded-full w-72 h-72 bg-blue-400 blur-3xl opacity-20 absolute bottom-5 right-20 z-0'></div>
        <div className='rounded-full w-56 h-56 bg-red-500 blur-3xl opacity-30 absolute top-24 right-[500px] z-0'></div>
        <div className='rounded-full w-80 h-80 bg-pink-500 blur-3xl opacity-20 absolute bottom-32 left-[400px] z-0'></div>

        {/* Left Image with text */}
        <div 
          className='w-1/2 h-full pt-20 bg-cover relative bg-transparent'
          style={{backgroundImage: `url(${dnaimage})`}}
        >
          <p className='absolute top-20 right-20 bg-transparent text-2xl font-michroma text-gray-300'>
            Timely Care With <br /> Virtual Consultation
          </p>

          <button className='absolute bottom-20 left-24 text-2xl bg-gray-900/50 backdrop-blur-md rounded-full py-3 px-5 border-2 border-white/20 flex justify-center items-center gap-2 hover:bg-white hover:text-black transition-all duration-150'>
            Book Consultant
          </button>
        </div>  

        {/* Right content */}
        <div className='w-1/2 h-full pt-20 bg-transparent'>
          <h3 className='text-3xl ml-14 font-michrome mt-20 mb-2 text-white'>Live Well, Be Well</h3> 
          <p className='ml-14 pr-20 text-gray-400'>
            Our medical website provides trusted healthcare services with easy online consultations, appointment booking, and access to expert doctors. Patients can securely manage health records, receive prescriptions, and track treatment progress. With a user-friendly design and reliable support, we aim to make quality healthcare accessible anytime, anywhere.
          </p>

          <div className='ml-14 mt-10 flex justify-start items-center gap-20 bg-transparent'>
            <div className='flex justify-center items-start flex-col bg-transparent'>
              <h3 className='text-5xl text-white'>100+</h3>
              <p className='ml-1 text-gray-400'>Hospitals</p>
            </div>
            <div className='flex justify-center items-start flex-col bg-transparent'>
              <h3 className='text-5xl text-white'>1000+</h3>
              <p className='ml-1 text-gray-400'>Doctors</p>
            </div>
            <div className='flex justify-center items-start flex-col bg-transparent'>
              <h3 className='text-5xl text-white'>10000+</h3>
              <p className='ml-1 text-gray-400'>Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
