import React from 'react'
import experienceImage from '../assets/service.png'

function ServiceSection() {
  return (
    <div className='grid grid-cols-2 gap-x-16 py-24'>
        <div className='flex justify-center space-y-24'>
            <img src={experienceImage} alt="ImageError"  className='w-[640] h-[675]'/>
        </div>
        <div className='space-y-10'>
            <div className='space-y-4'>
                <p className='text-primary-600 font-semibold text-[20px]'>OUR SERVICE  ________________</p>
                <h1 className='font-semibold text-[48px] w-[600px]'>Our Services Can Help You Grow Your Investments and Wealth</h1>
            </div>
            <div className='space-y-6'>
                <p className='text-text_color-700 text-[20px]' >When you choose Nishan, you not only get exceptional products but also outstanding service. We are committed to providing you with an unparalleled experience from start to finish. Our service is characterized by: </p>
                <div className='flex flex-col space-y-4'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='bg-primary-600/40 w-[39px] h-[39px] rounded-md'></div>
                            <p className='text-text_color-800 text-2xl'>Quality Craftsmanship</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <div className='bg-primary-600/40 w-[39px] h-[39px] rounded-md'></div>
                            <p className='text-text_color-800 text-2xl'>Timeless Elegance</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
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