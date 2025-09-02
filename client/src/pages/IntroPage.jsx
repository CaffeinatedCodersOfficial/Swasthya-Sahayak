import React from 'react'
import doctor from "../../public/doctor.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // random left %
    top: Math.random() * 100, // random top %
    size: Math.random() * 3 + 2, // random size (2px - 5px)
    delay: Math.random() * 3, // random twinkle delay
  }));
};

const stars = generateStars(25); // generate 25 stars

const IntroPage = () => {
  return (
    <div className='w-full h-[100dvh] bg-primaryBlue overflow-hidden relative'>
      
      {/* Animated Stars */}
      

      {/* Top Image Section */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${doctor})` }} 
        className='w-full h-2/6 rounded-b-full bg-top bg-cover scale-125'
      ></motion.div>

      {/* Middle Content */}
      <div className='w-full h-3/6 bg-transparent pt-14 relative'>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white z-"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='bg-transparent text-center text-white font-bold text-2xl px-8'
        >
          Faster Appointments, Smarter Queues
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className='bg-transparent text-cardbggray/75 px-8 mt-3 text-center'
        >
          Book doctor appointments, skip long queues, and access blood banks easily — all in one place.
        </motion.p>

        {/* Button with animation */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className='flex justify-center items-center mt-8 bg-transparent'
        >
          <button className='bg-[#00162D] px-5 py-3 gap-2 flex justify-center items-center rounded-full text-white hover:opacity-75'>
            Get Started 
            <div className='bg-white rounded-full p-2'>
              <FaArrowRight className='text-black rounded-full'/>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className='w-full h-2/6 rounded-t-full scale-125 bg-[#00162D] flex justify-center items-start text-white'
      >
        <h1 className='bg-transparent mt-12 text-lg font-semibold'>
          Swasthya Sahayak
        </h1>
      </motion.div>
    </div>
  )
}

export default IntroPage
