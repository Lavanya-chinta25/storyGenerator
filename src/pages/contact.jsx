import React from 'react'
import contactUs from '../assets/contactUs.jpg'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT<span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[270px] transition-transform transform hover:scale-105 hover:opacity-90 duration-500 ease-in-out' src={contactUs}/>
        <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-lg text-gray-600 '>Reach OUT</p>
        <p className='text-gray-500'>IIIT Nuzvid <br/>Nuzvid, 521202</p>
        <p className='text-gray-500'>e-mail:lavanyachinta6@gmail.com<br/></p>
        <p className='font-semibold text-black-600'>Let’s Partner Together for Innovation Projects!</p>
        <p className='font-semibold text-gray-500'>Connect with WORDWEAVE</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Collaborate Now</button>
        </div>
      </div>
    </div>
  )
}

export default contact
