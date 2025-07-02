import React from 'react'

const HeroContent = () => {
    return (
        <div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]'>Sarkar Study -From Preparation to Selection.</h1>
            <p className='mt-6 text-sm md:text-base text-opacity-60 text-white'>Your journey to success starts here. Join us for comprehensive study materials and expert guidance.</p>
            <div className='mt-8 flex items-center space-x-4'>
                <button className='button__cls bg-pink-600 hover:bg-pink-800'>Get Started</button>
                <button className='button__cls border border-white hover:bg-white hover:text-indigo-900'>Learn More</button>
            </div>
        </div>
    )
}

export default HeroContent;
