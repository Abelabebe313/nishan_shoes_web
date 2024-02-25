import React from 'react'
import landingImage from '../assets/landing_image.png'

function Home() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-3' id='home'>
        <div className='lg:col-span-7 space-y-10 py-20 md:space-y-20 md:py-28 '>
            <h1 className='text-text_color-950 font-semibold  md:px-0 md:text-7xl text-4xl '>Shoe and Bag <span className='text-primary-600'>Manufacturing </span>company</h1>
            <p className='text-xl text-text_color-700 md:text-2xl'>We Manufacture pure and Genuine Leather products like Shoe, Bags and Belts. The company established at 2014/2022. It has five founders 2 men and three women. </p> 
            
            <div className=' flex justify-start'>
                <button className='btnStyle h-[60px]'>Contact Us</button>  
            </div>
        </div>
        <div className='w-full lg:col-span-5'>
            <img src={landingImage} alt="ImageError"  className=' object-cover'/>
        </div>
    </div>
  )
}

export default Home;
