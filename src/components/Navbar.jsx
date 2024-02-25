/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <div className= 'flex items-center justify-between text-white'>
        <h1 className='text-[#252B42] font-semibold text-3xl'>Nishan</h1>
        <div className="hidden lg:flex flex-grow justify-center md:justify-end mt-4 md:mt-0">
            <a href="#home" className="text-[#252B42] hover:text-primary-600 mx-4">Home</a>
            <a href="#experience" className="text-[#252B42] hover:text-primary-600 mx-4">Expertise</a>
            <a href="#service" className="text-[#252B42] hover:text-primary-600 mx-4">Service</a>
            <a href="#products" className="text-[#252B42] hover:text-primary-600 mx-4">Products</a>
            <a href="#testimonial" className="text-[#252B42] hover:text-primary-600 mx-4">Testimonials</a>
            <a href="#contact" className="text-[#252B42] hover:text-primary-600 mx-4">Contact Us</a>
       </div>
       <button className='btnStyle flex justify-center gap-x-5'>
          <p className='md:text-xl '> Call Us </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
       </button>
    </div>
  )
}

export default Navbar