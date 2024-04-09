import React from 'react'

export const Contact = () => {
  return (
    <section id='Contact' className=''>
      <div className='h-full w-[80vw] mx-auto my-16'>
        <div>
          <h5 className='text-sm mb-2 text-red-500'>Contact</h5>
          <h3 className='text-xl font-bold'>Hit me Up! 👇🏾</h3>
        </div>

        <div className='flex mt-8 gap-16 flex-wrap'>
          <div className='flex justify-center gap-5 items-center leading-loose'>
            <i className='fa fa-location md:text-2xl'/>
            <div>
              <h2 className='text-sm font-medium'>Location</h2>
              <p className='text-xs leading-normal'>Redemption City, Ogun, Nigeria</p>
            </div>
          </div>

          <div className='flex justify-center gap-5 items-center leading-loose'>
            <i className='fa fa-message md:text-2xl'/>
            <div>
              <h2 className='text-sm font-medium'>Mail</h2>
              <p className='text-xs leading-normal'><a href='mailto:marvelous@britanniaeuropegroup.com'>marvelous@britanniaeuropegroup</a></p>
            </div>
          </div>

          <div className='flex justify-center gap-5 items-center leading-loose'>
            <i className='fa fa-phone md:text-2xl'/>
            <div>
              <h2 className='text-sm font-medium'>Phone</h2>
              <p className='text-xs leading-normal'><a href='call:+2348161548772'>(+234) 0 816 154 8772</a></p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
