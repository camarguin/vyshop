import React from 'react'
import { Button } from '../Button'
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  weight: ['200', '600'],
  style: ['normal'],
  subsets: ['latin'],
})

const Hero = ({ heroImg, heroTitle, heroSubtitle, heroButton, heroLink }) => {
  const backgroundImage = {
    backgroundImage: `url(${heroImg})`,
  }

  return (
    <div
      className={`${josefin_sans.className} h-screen flex bg-top bg-cover items-center justify-center`}
      style={backgroundImage}
    >
      <div className='w-screen'>
        <div className='px-10 text-left'>
          <div className='space-y-2'>
            <h3 className='text-2xl ml-1 font-semibold text-myBlue500'>{heroTitle}</h3>
            <h1 className='text-7xl font-light text-myBlue500'>{heroSubtitle}</h1>
          </div>
          <div className='mt-14'>
            <Button linkTo={heroLink}>{heroButton}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
