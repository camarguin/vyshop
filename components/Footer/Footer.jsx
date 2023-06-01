import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
})

const Footer = () => {
  return (
    <footer class={`${josefinSans.className} bg-myBlue500 px-10`}>
      <div className='flex-col bg-red'>
        <div>
          <Link href='/'>
            <Image
              src='/vyshop2.svg'
              alt='VyShop'
              width={50}
              height={50}
            />
          </Link>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className='flex text-center'>
        <p className='max-w-md mx-auto py-4 text-white'>©2023 VY Clothes | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
