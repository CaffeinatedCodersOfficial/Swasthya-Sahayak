import React from 'react'
import Silk from '../Backgrounds/Silk'

const LoginPage = () => {
  return (
    <div className='w-full h-[100dvh] relative'>
      <Silk
        speed={3}
        scale={1}
        color="#0165fc"
        noiseIntensity={1}
        rotation={0}
      />
      <div className='absolute inset-0 bg-transparent flex justify-center items-center'>
        <div className='backdrop-blur-md bg-transparent px-10 py-10 rounded-3xl flex justify-center items-center flex-col hover:border-2 hover:border-white/25'>
          <h3 className='bg-transparent text-white text-3xl font-semibold mb-10'>Register Now</h3>

          <form className='bg-transparent w-full md:w-[400px]'>
            <label className='flex flex-col bg-transparent text-white gap-2 mb-8'>
              Name
              <input className='bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white' placeholder='Enter your name...'/>
            </label>
            <label className='flex flex-col bg-transparent text-white gap-2 mb-8'>
              Email
              <input className='bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white' placeholder='Enter your email...' type='email'/>
            </label>
            <label className='flex flex-col bg-transparent text-white gap-2 mb-8'>
              Password
              <input className='bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white' placeholder='Enter your password...' type='password'/>
            </label>

            <div className='flex justify-center items-center bg-transparent'>
              <button className='text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage