import React from 'react'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const Button = ({ children, linkTo }) => {
  return (
    <Link href={linkTo}>
      <button
        className={`${roboto.className} group relative px-6 py-2 bg-myBlue400 overflow-hidden rounded-full text-md drop-shadow-md`}
      >
        <div className='absolute inset-0 w-0 bg-myBlue300 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
        <span className='relative text-white group-hover:text-white'>{children}</span>
      </button>
    </Link>
  )
}

export default Button
