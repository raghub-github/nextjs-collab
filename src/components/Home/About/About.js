import React from 'react'
// import { FaAward } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      { /* Define grid layout for About section */ }
      <div className=' w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        { /* First part */ }
        <div className='flex space-x-4 items-center'>
          <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-direction:column'>
            <TbTargetArrow className='text-white h-6 w-6' />
          </div>
          <h1 className='text-xl text-black font-semibold'>Our Mission</h1>
        </div>
        { /* Second part */ }
        <div className='flex space-x-4 items-center'>
          <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-direction:column'>
            <TbTargetArrow className='text-white h-6 w-6' />
          </div>
          <h1 className='text-xl text-black font-semibold'>Our Vision</h1>
        </div>
      </div>
    </div>
  )
}

export default About;
