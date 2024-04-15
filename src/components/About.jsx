import React from 'react'
import aboutImg from '../assets/about.jpg'

export const About = () => {
  return (
    <div id='About' className='bg-gray-300 dark:bg-white py-8'>
      <div className=' mt-[2rem] '>
        <section className='max-w-[80vw] md:h-screen h-full mx-auto md:flex justify-center items-center gap-12 grid grid-cols-1'>
          <div className='rounded-xl bg-gray-900 relative'>
            <img src={aboutImg} alt='digital_system' className='opacity-30 rounded-xl object-contain md:w-[30vw] w-screen' />
            <div className='absolute -bottom-12 -left-5 mx-auto'><p className=' border border-white md:py-8 m-2 bg-gray-900 dark:bg-white md:w-32 md:h-32 w-16 h-16 py-2  text-center md:text-4xl text-xl mx-auto rounded-full shadow-md duration-1000 transition-transform animate-spin'>🧑🏾‍💻</p></div>
          </div>
          
          <div className='md:max-w-[33vw] leading-loose'>
            <h4 className='text-sm mb-2 text-red-500'>About marvelUs </h4>
            <h6 className='font-bold '>Frontend Developer </h6>
            <p className='text-black text-justify text-l '>Marvelous is a budding front-end developer with 3 years of experience transforming static designs to interactive and responsive websites. He possess impressive skills in HTML, CSS, JavaScript, React, Tailwind CSS. He is a Graduate Member, Nigeria Society of Engineers (GMNSE) and is a problem solver and pursues user satisfaction from creating webpages and products that provide solutions to the world at large.</p>
          </div>
        </section>

      </div>
    </div>
  )
}
