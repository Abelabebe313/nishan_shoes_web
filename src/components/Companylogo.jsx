import React from 'react'
import logo1 from '../assets/facebook.png'
import logo2 from '../assets/instagram.png'
import logo3 from '../assets/tiktok.png'
import logo4 from '../assets/telegram.png'

function Companylogo() {
  return (
    <div className='hidden md:block space-y-20'>
        <div className='flex items-center justify-center gap-x-20'>
            <a href="https://www.facebook.com/nishanleather" target='blank'><img src={logo1} alt="logo1"  className='companylogo object-contain'/></a>
            <a href="https://www.instagram.com/nishanleather/" target='blank'><img src={logo2} alt="logo1"  className='companylogo object-contain'/></a>
            <a href="https://www.tiktok.com/@nishanleather?_t=8kBipZ4YyZC&_r=1" target='blank'><img src={logo3} alt="logo1"  className='companylogo object-contain'/></a>
            <a href="https://t.me/nishanleather" target='blank'><img src={logo4} alt="logo1"  className='companylogo object-contain'/></a>
            
        </div>
    </div>
  )
}

export default Companylogo
