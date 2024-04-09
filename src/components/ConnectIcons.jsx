import React from 'react'
import CVButton from './CVButton'
import { GitAndLinkedin } from './GitAndLinkedin'

export const ConnectIcons = () => {
  return (
    <div className='flex gap-2 my-3 text-2xl '>
    <GitAndLinkedin />

      <CVButton />
    </div>
  )
}
