import React from 'react'
import logo from '../assets/logo.png'

const footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            {/*Left section*/}
            <div>
                <img className='mb-5 w-[220px]' src={logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>WordWeave helps students improve communication skills through customizable stories in various themes and languages, making language learning creative and engaging.
                </p>
            </div>

            {/*center section section*/}
            <div className='mt-4'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>

            {/*right section*/}
            <div className='mt-4'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>LinkedIn:lavanya-chinta</li>
                    <li>lavanyachinta6@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copy right section */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@wordWeave-All Right Reserved</p>
        </div>
    </div>
  )
}

export default footer

