import React from 'react'
import aboutUs from '../assets/aboutus.webp'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] transition-transform transform hover:scale-105 hover:opacity-90 duration-500 ease-in-out' src={aboutUs}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to WordWeave, your platform for enhancing communication skills through engaging storytelling. Explore diverse stories in various South Indian languages, featuring themes like love, horror, and education. Our interactive environment fosters confidence and fluency in communication. Join us on your journey to becoming a more effective communicator, making learning enjoyable and impactful!</p>
          <p>At WordWeave, we create a dynamic space for students to practice and improve their communication skills through captivating narratives. By combining language learning with enjoyable storytelling, we boost confidence and fluency in both written and spoken forms. Whether reading for pleasure or skill development.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To empower students in becoming confident communicators by providing an engaging platform where language learning meets storytelling, fostering fluency and enjoyment through diverse narratives and themes.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:opacity-70 hover:text-white transition-al lduration-300 text-gray-600 cursor-pointer'>
          <b >Engaging:</b>
          <p>Enjoy stories that make communication practice both fun and effective.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:opacity-70 hover:text-white transition-al lduration-300 text-gray-600 cursor-pointer'>
        <b>Innovative</b>
        <p>Our platform evolves with you, keeping language learning fresh and interactive.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:opacity-70 hover:text-white transition-al lduration-300 text-gray-600 cursor-pointer'>
        <b>Empowering</b>
        <p>Boost your confidence and communication skills with every story you read.</p>
        </div>
      </div>

    </div>
  )
}

export default About
