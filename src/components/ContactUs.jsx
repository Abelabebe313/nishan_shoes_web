import React from 'react'
import large from '../assets/large.png'
import small from '../assets/Screenshot from 2024-02-21 20-43-06.png'

function ContactUs() {
  return (
    <div className='flex md:h-[600px]  py-8 space-y-6 bg-primary-600  p-8 shadow-lg rounded-tl-3xl rounded-br-3xl w-3/3'>
            <div className=' md:p-16 space-y-2 md:w-[50%]'>
                <p className='text-primary-300 font-semibold text-[20px]'>CONTACT US</p>
                <h1 className='text-white font-semibold text-3xl md:text-[48px]'>You Deserve the best!</h1>
                
                <div className='flex gap-x-6'>
                    <div class='bg-primary-700 w-14 h-14 rounded-lg flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    </div>

                    <div>
                        <p className='text-primary-900 font-bold text-lg'>Email Us</p>
                        <p className='text-white font-semibold md:text-2xl'>nishanleather@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-x-6'>
                    <div class='bg-primary-700 w-14 h-14 rounded-lg flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>

                    <div>
                        <p className='text-primary-900 font-bold text-lg'>Phone Us</p>
                        <p className='text-white font-semibold md:text-2xl'>0912932797  -  0903632274</p>
                    </div>
                </div>
                <p className='text-text_color-100 text-[20px]'>Want to contact our team and book a call? <span className='text-primary-400'>Try it now</span> </p>
            </div>
            <div className='hidden md:block relative py-8 rounded-tl-3xl rounded-br-3xl w-[50%] h-full '>
                <div className='absolute w-full h-[500px] left-44 top-5'>
                    <img src={large} alt="largerimage" className='rounded-tl-3xl rounded-br-3xl h-[450px] w-[450px]'/>
                </div>
                <div className='absolute w-full h-[350px] left-12 top-48'>
                <   img src={small} alt="largerimage" className='rounded-tl-3xl rounded-br-3xl h-[250px] w-[250px]'/>
                </div>
            </div>

    </div>
  )
}

export default ContactUs