import React from 'react'
import Image from 'next/image';
import {coursesData} from '@/data/data'; 

const Course = () => {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200'>
        {/* Bounce Ball */}
      <Image src="/images/cb.png" height={800} width={800} className="animate-bounce absolute top-[30%]" alt="Course Image" />
      <div className='w-[80%] pt-8 pb-8 mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold'>Popular Courses</h1>
        <div className='mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
          {/* Course Cards */}
          {coursesData.map((course, index) => {
            return (
              <div key={index} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image src={course.image} alt={course.title} width={300} height={200} className='w-full h-48 object-cover rounded-md mb-4' />
                <h2 className='text-xl font-semibold mb-2'>{course.title}</h2>
                <p className='text-gray-600 mb-4'>{course.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Course;