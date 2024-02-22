import React from 'react'

function Testimonial() {
  return (
    <div className='space-y-20 py-28'>
        <div className='space-y-4'>
            <p className='text-primary-600 font-semibold text-[20px]'>TESTIMONIALS  ________________</p>
            <h1 className='font-semibold text-[48px]'>What Our Customers Say</h1>
            <div className='w-1/3'>
              <p className='text-[20px] text-text_color-600'>Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>
            </div>
        </div>
        <div>
            <div className='flex justify-between gap-x-16'>
                <div className='flex flex-col py-8 space-y-6 bg-white p-8 border-4 rounded-tl-3xl rounded-br-3xl w-1/3 h-96'>
                    <div className='flex gap-x-6 pt-2'>
                      <div>
                        <img src='https://i.ibb.co/7Vf9fj7/Group-86.png' alt="ImageError" className='w-[70px] h-[70px] rounded-full'/>
                      </div>
                      <div>
                        <p className='text-[24px] text-text_color-800 font-bold'>John Doe</p>
                        <p className='text-[18px] text-text_color-400 '>Director</p>
                      </div>
                    </div>
                    <p className='text-[16px] text-text_color-700'>Financial planning and investment advice I received from this team completely 
                    transformed my future. I couldn't be happier with the results.</p>
                    <p className='text-primary-600 text-8xl font-serif'>"</p>
                </div>


                <div className='flex flex-col py-8 space-y-6 bg-primary-600 p-8 border-4 rounded-tl-3xl rounded-br-3xl w-1/3 h-96'>
                    <div className='flex gap-x-6 pt-2'>
                      <div>
                        <img src='https://i.ibb.co/7Vf9fj7/Group-86.png' alt="ImageError" className='w-[70px] h-[70px] rounded-full'/>
                      </div>
                      <div>
                        <p className='text-[24px] text-white font-bold'>John Doe</p>
                        <p className='text-[18px] text-text_color-100 '>Director</p>
                      </div>
                    </div>
                    <p className='text-[16px] text-white'>Financial planning and investment advice I received from this team completely 
                    transformed my future. I couldn't be happier with the results.</p>
                </div>

                <div className='flex flex-col py-8 space-y-6 bg-white p-8 border-4 rounded-tl-3xl rounded-br-3xl w-1/3 h-96'>
                    <div className='flex gap-x-6 pt-2'>
                      <div>
                        <img src='https://i.ibb.co/7Vf9fj7/Group-86.png' alt="ImageError" className='w-[70px] h-[70px] rounded-full'/>
                      </div>
                      <div>
                        <p className='text-[24px] text-text_color-800 font-bold'>John Doe</p>
                        <p className='text-[18px] text-text_color-400 '>Director</p>
                      </div>
                    </div>
                    <p className='text-[16px] text-text_color-700'>Financial planning and investment advice I received from this team completely 
                    transformed my future. I couldn't be happier with the results.</p>
                </div>
              </div>
         </div>
    </div>
  )
}

export default Testimonial