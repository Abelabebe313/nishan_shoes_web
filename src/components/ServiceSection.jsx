import React from 'react'
import serviceImage from '../assets/service.png'

function ServiceSection() {
  return (
    <div className='grid grid-col-1 md:grid-cols-2 gap-x-6 md:gap-x-16 py-24 items-center md:items-start'>
        <div className='hidden md:block'>
            <img src={serviceImage} alt="ImageError"  className=''/>
        </div>
        <div className='space-y-10'>
            <div className='space-y-4'>
                <div className='flex items-center gap-x-5'>
                        <div className='bg-primary-100'>
                            <p className='text-primary-600 font-semibold text-[16px] md:text-[20px]'>OUR SERVICE</p>
                        </div>
                        <hr className='bg-primary-600 h-[3px] w-44'/>
                </div>
                <h1 className='font-semibold text-[36px] md:text-[48px] w-[400px] md:w-[600px] text-center md:text-start'>Our Services Can Help You Grow Your Investments and Wealth</h1>
            </div>
            <div className='space-y-6'>
                <p className='text-text_color-700 text-[20px]' >When you choose Nishan, you not only get exceptional products but also outstanding service. We are committed to providing you with an unparalleled experience from start to finish. Our service is characterized by: </p>
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                        <div className='flex items-center gap-x-4'>
                            <div className='bg-primary-600/40 w-[39px] h-[39px] rounded-md'></div>
                            <p className='text-text_color-800 text-2xl'>Quality Craftsmanship</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <div className='bg-primary-600/40 w-[39px] h-[39px] rounded-md'></div>
                            <p className='text-text_color-800 text-2xl'>Timeless Elegance</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                        <div className='flex items-center gap-x-4'>
                            <div className='bg-primary-600/40 w-[39px] h-[39px] rounded-md'></div>
                            <p className='text-text_color-800 text-2xl'>Comfort and Durability</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <div className='bg-primary-600/40 w-[39px] h-[39px] rounded-md'></div>
                            <p className='text-text_color-800 text-2xl'>Personalized Touch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ServiceSection