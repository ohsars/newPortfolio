import React from 'react'
import dp from '../assets/dp.jpg'

export const Hero = () => {


  return (
    <div className='h-[90vh] mt-[20vh]'>
      <div>
        <section className='flex justify-between flex-wrap items-center mx-auto w-[70vw] '>
          <div className='sm:text-center md:text-left'>
            <h2 className='text-4xl md:max-w-[25vw] font-extrabold leading-normal '>Front-End React Developer 👋🏾</h2>
            <p className='text-gray-500 text-s leading-[1.8] my-4 md:max-w-[35vw]'>Hi, I'm Osakpolor M, EFEBE. A passionate Front-end React Developer based in Ogun, Nigeria. 📍</p>
            <div className='flex gap-2 my-3 text-2xl '>

              <a href='https://www.linkedin.com/in/horsars/' target='_blank'><i className='fa fa-linkedin bg-gray-500 p-2 rounded hover:text-gray-900 '/></a>

              <a href='https://github.com/ohsars' target='_blank'><i className='fa fa-github bg-gray-500  p-2 rounded hover:text-gray-900 '/></a>

              <p className='bg-gray-500  p-2 rounded hover:text-gray-900 text-sm'><a href='https://drive.google.com/file/d/1jyVQFfDyAWDZuc9NsY7oeFR7poNw-WXu/view' target='_blank'><i className='fa fa-download'/> Download CV</a></p>
            </div>
          </div>

          <div className='border-1 p-1 border-black dark:border-white'>
            <img src={dp} alt='dp' className='rounded-bl-xl rounded-tr-3xl border-black object-cover object-center md:w-[20vw] w-[60%] md:h-[50vh] hover:translate-x-2 transition-transform transform-gpu shadow-md shadow-black dark:shadow-white'/>
          </div>


        </section>

        <section className='flex gap-16 md:justify-start items-center justify-center flex-wrap mx-auto my-8 md:w-[70vw]'>
          <h2 className='p-1 font-semibold  bg-black dark:bg-gray-500 rounded text-white'>Tech Stack</h2>
          <span className='hidden md:block text-red-500 dark:text-white'>||</span>
          <div className='gap-8 p-3 md:text-[] text-xl font-xl flex items-center text-center'>
            <i className='fa fa-html5'/>
            <i className='fa-brands fa-css3'/>
            <i className='fa-brands fa-js'/>
            <i className='fa-brands fa-react'/>
          </div>
          
        </section>
      </div>
    </div>
  )
}
