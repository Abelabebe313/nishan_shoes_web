import React from 'react'
import experienceImage from '../assets/Leather_poster.jpg'

function ExperienceSection() {
  return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-16 py-24 items-center' id='experience'>
            <div className='space-y-10 text-center md:text-left'>
                <div className='space-y-6'>
                    <div className='flex items-center gap-x-5'>
                        <div className='bg-primary-100'>
                            <p className='text-primary-600 font-semibold text-[16px] md:text-[20px]'>OUR EXPERTISE</p>
                        </div>
                        <hr className='bg-primary-600 h-[3px] w-44'/>
                    </div>

                    <h1 className='font-semibold text-[36px] md:text-[48px] w-[400px] md:w-[700px]'>Experience Nishan Where Quality, elegance, and personalized service, seamlessly elevating your style</h1>
                </div>
                <div className='space-y-6'>
                    <p className='text-text_color-700 text-[16px] md:text-[20px]'> At Nishan, we pride ourselves on our expertise in crafting premium leather products. With years of experience and a passion for perfection, our skilled artisans meticulously create each item to meet the highest standards of quality and design. From shoes to bags and belts, we combine traditional craftsmanship with modern techniques to deliver products that exude elegance and sophistication.</p>
                </div>
            </div>
            <div className='pt-10 md:pt-0 h-auto md:h-[80%]'>
                <img src={experienceImage} alt="ImageError" className='w-full md:w-auto' />
            </div>
    </div>
  )
}

export default ExperienceSection