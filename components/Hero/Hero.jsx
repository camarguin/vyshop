'use client'
import React from 'react'
import { Button } from '../Button'
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  weight: ['200', '600'],
  style: ['normal'],
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <div className={`${josefin_sans.className} relative h-screen flex flex-col justify-center`}>
      <div className="absolute inset-0 bg-[url('/heroBackground.jpg')] bg-cover bg-top opacity-70"></div>
      <div className='relative z-10 px-10 w-fit space-y-12'>
        <div className='space-y-2'>
          <h3 className='text-2xl font-semibold text-myBlue500'>New Collection</h3>
          <h1 className='text-6xl font-light text-myBlue500'>
            Find your perfect <br /> match
          </h1>
        </div>
        <div className='flex justify-center'>
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
