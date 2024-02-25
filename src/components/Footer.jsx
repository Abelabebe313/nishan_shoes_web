import React from 'react'

function Footer() {
    return (
        <div className='bg-primary-600 text-xl text-white mt-32'>
            <div className='grid grid-cols-1 md:grid-cols-5 items-start px-10 gap-y-12 md:px-44 gap-x-32 py-8 md:py-16'>
                <div className='md:col-span-2 flex flex-col items-start gap-5'>
                    <h5 className='text-2xl font-semibold'> You Deserve the best</h5>
                    <p className='w-5/6 text-start'>We Manufacture pure and Genuine Leather products like Shoe, Bags and Belts. The company established at 2014/2022. It has five founders 2 men and three women..</p>
                    
                </div>
                <div className='md:col-span-1 flex flex-col gap-3 md:gap-5'>
                        <h5 className='text-2xl font-semibold'>Our Services</h5>
                        <p>Kids Leather Bags</p>
                        <p>Fashion Mens's shoes</p>
                        <p>Lady's purses</p>
                        <p>Laptop and Work Bags</p>
                </div>
                <div className='md:col-span-1 flex flex-col gap-3 md:gap-5'>
                        <h5 className='text-2xl font-semibold'>Explore More</h5>
                        <p>Contact Us</p>
                        <p>Experience</p>
                        <p>Service</p>
                        <p>Product</p>
                        <p>Testimonial</p>
                </div>
                <div className='md:col-span-1 flex flex-col gap-3 md:gap-5'>
                        <h5 className='text-2xl font-semibold'>Contact Details</h5>
                        <p className='font-medium'>Phone</p>
                        <p>+251 912932797</p>
                        <p>+251 903632274</p>
                        <p className='font-medium'>Email</p>
                        <p>nishanleather@gmail.com</p>
                </div>
            </div>
            <div className='px-10 md:px-44 pb-8 '>
                <hr className='bg-white h-[3px]'/>
                <div className='flex text-sm md:text-base justify-between pt-5'>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                    </div>
                    <div className='flex gap-5'>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
