import React from 'react'
import img1 from '../../images/client-databiz.svg'
import img2 from '../../images/client-audiophile.svg'
import img3 from '../../images/client-meet.svg'
import img4 from '../../images/client-maker.svg'

const Main = () => {
  return (
    <main className='text-center sm:text-left sm:py-5 lg:py-32 mx-5 flex flex-col justify-between md:py-10  h-full'>
      <div>
        <h1 className='text-3xl font-bold sm:text-4xl lg:text-6xl'>
          Make remote work
        </h1>
      </div>
      <div>
        <p className='text-[16px] text-vGRay mt-5'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className='my-7 border inline-block px-3 py-2 text-vWhite bg-vBlack rounded-[15px]'>
          Learn more
        </div>
      </div>

      <div className='flex justify-between mt-2 '>
        <div className='w-[70px]'>
          <img src={img1} alt='logo' />
        </div>
        <div className='w-[43px]'>
          <img src={img2} alt='logo' />
        </div>
        <div className='w-[70px]'>
          <img src={img3} alt='logo' />
        </div>
        <div className='w-[70px]'>
          <img src={img4} alt='logo' />
        </div>
      </div>
    </main>
  )
}

export default Main
