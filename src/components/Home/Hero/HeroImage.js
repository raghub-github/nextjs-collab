import React from 'react'
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className='relative w-full h-64 lg:h-full'>
      <Image src="/images/hero-image.jpg" alt="Hero" layout='fill' className='object-cover w-full h-full rounded-lg shadow-lg' />
    </div>
  )
}

export default HeroImage
