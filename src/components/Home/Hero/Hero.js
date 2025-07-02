import React from 'react'
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-indigo-950'>
            <div className='flex flex-col justify-center w-5/6 mx-auto h-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Hero Section Text Content */}
                    <HeroContent />
                    { /* Hero Section Image Content */}
                    <HeroImage />
                </div>
            </div>
        </div>
    )
}

export default Hero;