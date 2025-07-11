import React from 'react'
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
    return (
        // <div className='w-full pt-[3vh] md:pt-[12vh] h-screen bg-indigo-950 overflow-hidden'>
        <div className='w-full min-h-[calc(100vh-10vh)] pt-[4vh] sm:pt-[15vh] md:pt-[15vh] lg:pt-[15vh] xl:pt-[15vh] h-screen bg-indigo-950 overflow-hidden'>
            <div className='flex flex-col justify-center w-[85%] mx-auto h-full'>
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

// const Hero = () => {
//     return (
//         // <section className="w-full pt-[6vh] lg:pt-[10vh] min-h-[calc(100vh-64px)] bg-indigo-950 overflow-hidden">
//         <section className="w-full pt-[6vh] lg:pt-[10vh] min-h-[calc(100vh-10vh)] bg-indigo-950 overflow-hidden">
//             <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//                 {/* Hero Section Text Content */}
//                 <HeroContent />

//                 {/* Hero Section Image Content */}
//                 <HeroImage />
//             </div>
//         </section>
//     );
// };

export default Hero;