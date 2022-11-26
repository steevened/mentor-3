import React from 'react'
import heroDesktop from '../../images/image-hero-desktop.png'
import heroMobile from '../../images/image-hero-mobile.png'

const Hero = () => {
  return (
    <section className='w-full h-full mt-2'>
      <picture className='w-full h-full'>
        <source srcSet={heroDesktop} media='(min-width: 640px)' />
        <img src={heroMobile} alt='hero' />
      </picture>
    </section>
  )
}

export default Hero
