import React from 'react'
import dp from '../assets/dp.jpg'
import {ConnectIcons} from "./ConnectIcons"

export const Hero = () => {


  return (
    <div id='Home'>
      <div className='h-full md:my-32 my-8'>
        <section className='flex justify-between flex-wrap items-center mx-auto w-[80vw] md:w-[70vw]'>
          <div className='sm:text-center md:text-left'>
            <h2 className='text-4xl md:max-w-[25vw] font-extrabold leading-normal '>Software Developer 👋🏾</h2>
            <p className='text-gray-500 text-s leading-[1.8] my-4 md:max-w-[35vw]'>Hi, I'm Osakpolor M, EFEBE. A passionate Web Developer based in Ogun, Nigeria. 📍</p>
            <ConnectIcons /> 
          </div>

          <div className='border-1 p-1 border-black dark:border-white'>
            <img src={dp} alt='dp' height={300} className='rounded-bl-xl rounded-tr-3xl border-black object-cover object-center md:w-[20vw] w-[90vw] md:h-[50vh] hover:translate-x-2 transition-transform transform-gpu shadow-md shadow-black dark:shadow-white'/>
          </div>


        </section>

        <section className='flex md:gap-4 justify-around md:justify-start items-center flex-wrap mx-auto  md:w-[70vw]'>
          <h2 className='font-semibold uppercase '>Tech Stack</h2>
          <span className='hidden md:block text-red-500 dark:text-white'>-</span>
          <div className='gap-8 p-3 text-xl font-xl flex items-center text-center'>
            <i className='fa-brands fa-react text-2xl'/>
            <i className='fa-brands fa-php text-2xl'/>
            <i className='fa fa-html5 text-2xl'/>
            <i className='fa-brands fa-css3 text-2xl'/>
            <i className='fa-brands fa-js text-2xl'/>
          </div>
          
        </section>
      </div>
    </div>
  )
}
