import React from 'react'
import aboutImg from '../assets/about.jpg'

export const About = () => {
  return (
    <div className='h-screen bg-gray-300 dark:bg-white py-8'>
      <div className='md:mt-[12rem] mt-[2rem]'>
        <section className='max-w-[70vw] mx-auto md:flex justify-center items-start gap-12 grid grid-cols-1 '>
          <div className='rounded-xl bg-gray-900 '>
            <img src={aboutImg} alt='digital_system' className='opacity-30 rounded-xl ' width={350}/>
          </div>
          
          <div className='md:max-w-[33vw] leading-loose'>
            <h4 className='text-sm mb-2 text-red-500'>About marvelUs </h4>
            <h6></h6>
            <p className='text-black text-justify text-l '>Marvelous is a budding front-end developer with 3 years of experience transforming static designs to interactive and responsive websites. He possess impressive skills in HTML, CSS, JavaScript, React, Tailwind CSS. He is a problem solver and pursues user satisfaction from creating webpages and products that provide solutions to the world at large.</p>
          </div>
        </section>
        <div><p className='p-5 bg-gray-900 md:w-[5vw] w-[10vw] md:h-[10vh] h-[3vh] text-center mx-auto rounded-full shadow-md duration-500 animate-spin'>🧑🏾‍💻</p></div>
        
      </div>
    </div>
  )
}
