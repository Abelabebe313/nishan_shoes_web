/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <div className= 'flex items-center justify-between text-white'>
        <h1 className='text-[#252B42] font-semibold text-3xl'>Nishan</h1>
        <div className="md:flex flex-grow justify-center">
            <a href="#" className="text-[#252B42] hover:text-primary-600 mx-4">Home</a>
            <a href="#" className="text-[#252B42] hover:text-primary-600 mx-4">Products</a>
            <a href="#" className="text-[#252B42] hover:text-primary-600 mx-4">Contact Us</a>
            <a href="#" className="text-[#252B42] hover:text-primary-600 mx-4">About Us</a>
           
       </div>
       <div className='flex items-center gap-x-5'>
        <h2 className='text-primary-600 '>Sign in</h2>
       <button className='btnStyle h-[60px]'>
              Get Started
            </button>

       </div>
    </div>


  )
}

export default Navbar