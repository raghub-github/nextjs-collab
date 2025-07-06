import React from 'react'
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

// const Hero = () => {
//     return (
//         // <div className='w-full pt-[3vh] md:pt-[12vh] h-screen bg-indigo-950 overflow-hidden'>
//         <div className='w-full pt-[3vh] sm:pt-[5vh] md:pt-[8vh] lg:pt-[12vh] h-screen bg-indigo-950 overflow-hidden'>
//             <div className='flex flex-col justify-center w-[85%] mx-auto h-full'>
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
//                     {/* Hero Section Text Content */}
//                     <HeroContent />
//                     { /* Hero Section Image Content */}
//                     <HeroImage />
//                 </div>
//             </div>
//         </div>
//     )
// }

const Hero = () => {
    return (
        <div className="w-full pt-[15vh] sm:pt-[15vh] md:pt-[15vh] lg:pt-[15vh] xl:pt-[12vh] min-h-screen bg-indigo-950 overflow-hidden">
            <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Section Text Content */}
                <HeroContent />
                {/* Hero Section Image Content */}
                <HeroImage />
            </div>
        </div>
    );
};

export default Hero;