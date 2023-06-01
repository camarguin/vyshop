'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Italiana } from 'next/font/google'
import { CartButton, SearchInput, CartSidebar, WishlistButton, WishlistSidebar, LoginButton } from './index'

const italiana = Italiana({ weight: '400', subsets: ['latin'] })

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const handleCartToggle = () => {
    if (isWishlistOpen) {
      setIsWishlistOpen(false)
      setIsCartOpen(!isCartOpen)
    } else {
      setIsCartOpen(!isCartOpen)
    }
  }
  const handleWishlistToggle = () => {
    if (isCartOpen) {
      setIsCartOpen(false)
      setIsWishlistOpen(!isWishlistOpen)
    } else {
      setIsWishlistOpen(!isWishlistOpen)
    }
  }

  const navLinks = [
    { link: '/trending', name: 'Trending' },
    { link: '/men', name: 'Men' },
    { link: '/women', name: 'Women' },
    { link: '/outlet', name: 'Outlet' },
    { link: '/about', name: 'About Us' },
  ]

  const pathname = usePathname()

  return (
    <div className={`${italiana.className} text-myBlue500 px-10 fixed top-0 w-full h-16 bg-white z-50`}>
      <div className='h-16 mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image
            src='/vyshop.svg'
            alt='VyShop'
            width={50}
            height={50}
          />
        </Link>
        <div className='space-x-4'>
          {navLinks.map((link) => {
            const isActive = pathname === link.link

            return (
              <Link
                className={`inline-block group text-lg tracking-widest ${
                  isActive ? 'text-myBlue600' : 'text-myBlue500'
                }`}
                href={link.link}
                key={link.name}
              >
                <span
                  className={`relative pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-[15px] after:origin-bottom-left after:scale-x-0 after:bg-myBlue500 after:content-[''] ${
                    isActive ? 'after:scale-x-100 text-myBlue600' : 'group-hover:after:scale-x-100'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            )
          })}
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <SearchInput />
          </div>
          <div className='flex-2'>
            <LoginButton isLogged={true} />
          </div>
          <div className='flex-3'>
            <WishlistButton
              isWishlistOpen={isWishlistOpen}
              handleWishlistSidebar={handleWishlistToggle}
            />
          </div>
          <div className='flex-4'>
            <CartButton
              isCartOpen={isCartOpen}
              handleCartSidebar={handleCartToggle}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 top-16 right-0 w-64 bg-gray-200 shadow ease-in-out duration-300 ${
          isCartOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <CartSidebar isCartOpen={isCartOpen} />
      </div>
      <div
        className={`fixed inset-y-0 top-16 right-0 w-64 bg-gray-200 shadow ease-in-out duration-300 ${
          isWishlistOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <WishlistSidebar isWishListOpen={isWishlistOpen} />
      </div>
    </div>
  )
}

export default Navbar
