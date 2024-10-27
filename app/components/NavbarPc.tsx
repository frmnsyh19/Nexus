"use client"

import Link from 'next/link'
import React from 'react'

const NavbarPc = () => {
  return (
    <>
      <div className=' w-full hidden lg:flex flex-col justify-start items-center'>
        <div className=' w-full bg-indigo-950 h-12 flex justify-center items-center'>
          <p className=' text-white'>LOGO</p>
        </div>
        <div className=' w-full bg-indigo-900 p-3 flex justify-center gap-10 items-center'>
          <Link href="/" className=' hover:text-orange-500 text-white'>Home</Link>
          <Link href="/" className=' hover:text-orange-500 text-white'>About Us</Link>
          <Link href="/" className=' hover:text-orange-500 text-white'>Features</Link>
          <Link href="/" className=' hover:text-orange-500 text-white'>Categoris</Link>
          <Link href="/" className=' hover:text-orange-500 text-white'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default NavbarPc