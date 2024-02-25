import React from 'react'
import logo1 from '../assets/Frame 4.png'
import logo2 from '../assets/Frame 5.png'
import logo3 from '../assets/Frame 6.png'
import logo4 from '../assets/Frame 7.png'
import logo5 from '../assets/Frame 8.png'
import logo6 from '../assets/Frame 9.png'

function Companylogo() {
  return (
    <div className='hidden md:block space-y-20'>
        <div className='flex items-center justify-center gap-x-20'>
            <img src={logo1} alt="logo1"  className='companylogo'/>
            <img src={logo2} alt="logo2" className='companylogo'/>
            <img src={logo3} alt="logo3" className='companylogo'/>
            <img src={logo4} alt="logo4" className='companylogo'/>
            <img src={logo5} alt="logo5" className='companylogo'/>
            <img src={logo6} alt="logo6" className='companylogo'/>
        </div>
    </div>
  )
}

export default Companylogo
