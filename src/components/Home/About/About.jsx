import React from 'react'
// import { FaAward } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      { /* Define grid layout for About section */}
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        { /* First part */}
        <div>
          <div className='flex space-x-4 items-center'>
            <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
              <TbTargetArrow className='text-white h-6 w-6' />
            </div>
            <h1 className='text-xl text-black font-semibold'>Our Mission</h1>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Online Learning Whenever and Wherever.</h1>
          <p className='mt-4 text-gray-600'>We provide accessible education to everyone, everywhere. Our mission is to empower learners through innovative technology and personalized experiences.</p>
          <button className='mt-8 hover:bg-gray-700 flex items-center space-x-2 text-white py-3 px-8 transition-all duration-300 bg-black rounded-3xl'>
            <span>Get Started</span>
            <FaArrowRight />
          </button>
        </div>
        { /* Second part */}
        <div>
          <div>
            <h1 className='text-7xl font-bold lg:text-9xl text-black opacity-10'>01</h1>
            <div className='-mt-10'>
              <h1 className='text-xl md:text-2xl mb-3 text-black font-bold opacity-70'>Flexible Schedule</h1>
              <p className='w-[90%] lg:w-[70%] text-base text-black opacity-60'>Learn at your own pace with our flexible scheduling options and personalized learning paths.</p>
            </div>
          </div>

          <div className='mt-8 w-full'>
            <h1 className='text-7xl font-bold lg:text-9xl text-black opacity-10'>02</h1>
            <div className='-mt-10'>
              <h1 className='text-xl md:text-2xl mb-3 text-black font-bold opacity-70'>Trusted Content</h1>
              <p className='w-[90%] lg:w-[70%] text-base text-black opacity-60'>We curate high-quality resources from reputable sources to ensure you receive the best education possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
