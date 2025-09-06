import React, { useState } from 'react'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home')
  return (
    <div className='fixed w-full z-50 bg-transparent backdrop-blur-md py-5 px-10 flex justify-between items-center'>
        <div className='bg-transparent font text-xl font-michroma font-semibold text-white'>
            Swasthya Sahayak
        </div>
        <ul className='flex justify-center items-center gap-10 bg-transparent text-white'>
            <li onClick={()=>setActiveLink("home")} className={`transition-all duration-150 cursor-pointer ${activeLink==="home"?"bg-[white] text-black px-4 py-3 rounded-full hover:opacity-75":"text-white bg-transparent"}`}>Home</li>
            <li onClick={()=>setActiveLink("about")} className={`transition-all duration-150 cursor-pointer  ${activeLink==="about"?"bg-white text-black px-4 py-3 rounded-full hover:opacity-75":"text-white bg-transparent"}`}>About</li>
            <li onClick={()=>setActiveLink("services")} className={`transition-all duration-150 cursor-pointer ${activeLink==="services"?"bg-white text-black px-4 py-3 rounded-full hover:opacity-75":"text-white bg-transparent"}`}>Services</li>
            <li onClick={()=>setActiveLink("explore")} className={`transition-all duration-150 cursor-pointer ${activeLink==="explore"?"bg-white text-black px-4 py-3 rounded-full hover:opacity-75":"text-white bg-transparent"}`}>Explore</li>
            <button className='bg-white px-5 py-3 hover:opacity-75 rounded-full text-black'>Book Appointment</button>
            
        </ul>
    </div>
  )
}

export default Navbar