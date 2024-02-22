import React from 'react'
import experienceImage from '../assets/Leather_poster.jpg'

function ExperienceSection() {
  return (
    <div className='grid grid-cols-2 gap-x-16 py-24'>
        <div className='space-y-10'>
            <div className='space-y-6'>
                <p className='text-primary-600 font-semibold text-[20px]'>OUR EXPERTISE  ________________</p>
                <h1 className='font-semibold text-[48px] w-[700px]'>Experience Nishan Where Quality, elegance, and personalized service, seamlessly elevating your style</h1>
            </div>
            <div className='space-y-6'>
                <p className='text-text_color-700 text-[20px]'> At Nishan, we pride ourselves on our expertise in crafting premium leather products. With years of experience and a passion for perfection, our skilled artisans meticulously create each item to meet the highest standards of quality and design. From shoes to bags and belts, we combine traditional craftsmanship with modern techniques to deliver products that exude elegance and sophistication.</p>
                {/* <p className='text-text_color-700 text-[20px]'>We're Committed to Providing You with Expert Guidance, Proven Strategies & Personalized Approach to Ensure Financial Prosperity</p> */}
            </div>

        </div>
        <div className='pt-10 h-[80%]'>
            <img src={experienceImage} alt="ImageError"  className=''/>
        </div>
    </div>
  )
}

export default ExperienceSection