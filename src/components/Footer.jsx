import React from 'react'
import { ConnectIcons } from './ConnectIcons';
import { GitAndLinkedin } from './GitAndLinkedin';

export const Footer = () => {

  const date = new Date ();
  const d = date.getFullYear();

  return (
    <footer className='bg-black text-white dark:text-black dark:bg-white'>
      <div className='w-[80vw] h-[12vh] mx-auto flex items-center justify-between h-'>
        <div>
          <p className='text-sm'>{`Copyright @${d}. All rights reserved.`}</p>
        </div>
        <div className='flex gap-2 my-3 text-2xl '>
          <GitAndLinkedin />
        </div>
        
      </div>
    </footer>
  )
}
