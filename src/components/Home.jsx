import React from 'react'
import InputBox from './InputBox'
import landingImage from '../assets/landing_image.png'

function Home() {
  return (
    <div className='flex gap-x-14'>
        <div className='space-y-20 py-28'>
            <h1 className='text-text_color-950 font-semibold text-7xl w-[700px]'>Shoe and Bag <span className='text-primary-600'>Manufacturing </span>company</h1>
            <p className='text-2xl text-text_color-700'>We Manufacture pure and Genuine Leather products like Shoe, Bags and Belts. The company established at 2014/2022. It has five founders 2 men and three women. </p> 
            
            <div className='space-x-5'>
                {/* <InputBox
                    placeholder='Your email address'
                    value=''
                    onChange={()=>{}}
                /> */}
                <button className='btnStyle h-[76px]'>Get Started</button>  
            </div>
        </div>
        <div className=''>
            <img src={landingImage} alt="ImageError"  className='w-[85%]'/>
        </div>
    </div>
  )
}

export default Home
