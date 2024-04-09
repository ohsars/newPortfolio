import React from 'react'

export const Contact = () => {
  return (
    <section id='Contact' className=''>
      <div className='h-[30vh] w-[80vw] mx-auto '>
        <div>
          <h5 className='text-sm mb-2 text-red-500'>Contact</h5>
          <h3 className='text-xl font-bold'>Hit me Up! 👇🏾</h3>
        </div>

        <div className='flex mt-8 md:gap-16 flex-wrap'>
          <div className='flex justify-center gap-5 items-center leading-loose'>
            <i className='fa fa-location text-2xl'/>
            <div>
              <h2>Location</h2>
              <p className='text-sm leading-normal'>Redemption City, Ogun, Nigeria</p>
            </div>
          </div>

          <div className='flex justify-center gap-5 items-center leading-loose'>
            <i className='fa fa-message text-2xl'/>
            <div className=''>
              <h2>Mail</h2>
              <p className='text-sm leading-normal'><a href='mailto:marvelous@britanniaeuropegroup.com'>marvelous@britanniaeuropegroup</a></p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
