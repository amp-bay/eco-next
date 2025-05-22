
"use client"

import { useCartStore } from '@/store/cart-store'
import { ShoppingCartIcon ,Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const {items}=useCartStore()
  const cartItemCount =items.reduce((total,item)=>total +item.quantity,0)
  return (
    <nav className="container mx-auto  sticky top-0 z-50 bg-amber-400 shadow md:rounded-2xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 rounded-2xl">
        <Link href="/" className="hover:text-blue-600">
         <span className='text-blue-500 '>CHOP-LIFE</span>
        </Link>

        {!mobileMenuOpen && (
        <div className="text-amber-950 text-lg hidden md:flex space-x-6">
          <Link href="/">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-600">
           About Us
          </Link>
          <Link href="/products" className="hover:text-blue-600">
           Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            CheckOut
          </Link>
        </div>)}

       

        <div className="flex items-center space-x-4">
          <Link href="/checkout"> 
          <div className="relative ">
            <ShoppingCartIcon className=" h-6 w-6"/>
              {cartItemCount >= 0 && 
              (<span  className=" absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">{cartItemCount}</span>)}


          </div>

          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className=" md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <Link href="#about" className="block hover:text-blue-600">
            About Us
            </Link>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
    
  )
}

export default Navbar