'use client';

import React from 'react'
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const HeroImage = () => {
  return (
    <Tilt>
      <div className='hidden lg:block overflow-hidden'>
        <Image src="/images/hero.png" priority width={600} height={500} alt="Hero" />
      </div>
    </Tilt>
  );
}

export default HeroImage;