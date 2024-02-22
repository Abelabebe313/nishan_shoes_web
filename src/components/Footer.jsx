import React from 'react'

function Footer() {
    return (
        <div className='bg-primary-600 text-xl text-white mt-32'>
             <div className='grid grid-cols-5 items-start px-44 gap-x-32 py-16'>
                <div className='col-span-2 flex flex-col items-start gap-5'>
                    <h5 className='text-2xl font-semibold'>Nishan</h5>
                    <p className='w-5/6 text-start'>We Manufacture pure and Genuine Leather products like Shoe, Bags and Belts. The company established at 2014/2022. It has five founders 2 men and three women..
                    </p>
                </div>
                <div className='col-span-1 flex flex-col gap-5'>
                        <h5 className='text-2xl font-semibold'>Our Services</h5>
                        <p>Kids Leather Bags</p>
                        <p>Fashion Mens's shoes</p>
                        <p>Lady's purses</p>
                        <p>Laptop and Work Bags</p>
                </div>
                <div className='col-span-1 flex flex-col gap-5'>
                        <h5 className='text-2xl font-semibold'>Explore More</h5>
                        <p>Contact Us</p>
                        <p>Experience</p>
                        <p>Service</p>
                        <p>Product</p>
                        <p>Testimonial</p>
                </div>
                <div className='col-span-1 flex flex-col gap-5'>
                        <h5 className='text-2xl font-semibold'>Contact Details</h5>
                        <p>Link1</p>
                        <p>Link1</p>
                        <p>Link1</p>
                        <p>Link1</p>
                        <p>Link1</p>
                </div>
            </div>

            <div className='px-44 pb-8 '>
                <hr className='bg-white h-[3px]'/>
                <div className='flex justify-between pt-5'>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                    </div>
                    <div className='flex gap-5'>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
    
            </div>
            
          {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-white' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div> */}
        </div>
    );
}

export default Footer
