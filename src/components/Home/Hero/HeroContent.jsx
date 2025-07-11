import React from 'react'

const HeroContent = () => {
    return (
        <div>
            {/* Description */}
            <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]'>Sarkar Study - The Way of Success.</h1>
            <p className='mt-6 text-sm md:text-base text-opacity-60 text-white'>Your journey to success starts here. Join us for comprehensive study materials and expert guidance. Best course for all competitive exams.</p>
            {/* Buttons */}
            <div className='mt-8 flex items-center space-x-4'>
                <button className='button__cls bg-pink-600 hover:bg-pink-800'>Get Started</button>
                <button className='button__cls border border-white hover:bg-white hover:text-indigo-900'>Learn More</button>
            </div>
            {/* stats */}
            <div className='mt-8 flex items-center flex-wrap space-x-16'>
                <div className='text-white mt-4 lg:mt-0 md:mt-0'>
                    <p className='md:text-xl lg:text-2xl text-base font-bold'>30+</p>
                    <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
                    <p className='text-sm md:text-lg text-opacity-70'>Courses</p>
                </div>
                <div className='text-white mt-4 lg:mt-0 md:mt-0'>
                    <p className='md:text-xl lg:text-2xl text-base font-bold'>1400+</p>
                    <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
                    <p className='text-sm md:text-lg text-opacity-70'>Students</p>
                </div>
                <div className='text-white mt-4 lg:mt-0'>
                    <p className='md:text-xl lg:text-2xl text-base font-bold'>500+</p>
                    <p className='w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg'></p>
                    <p className='text-sm md:text-lg text-opacity-70'>Free PDFs Materials</p>
                </div>
            </div>
        </div>
    )
}

export default HeroContent;