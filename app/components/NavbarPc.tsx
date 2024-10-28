"use client"

import Link from 'next/link'
import React from 'react'

const NavbarPc = () => {
  return (
    <>
      <div className=' w-full hidden lg:flex flex-col justify-start items-center'>
        <div className=' w-full bg-indigo-950 h-16 flex justify-center items-center'>
          <img className="w-36 h-full" src="/team/logo.png"></img>
        </div>
        <div className=' w-full bg-indigo-900 p-3 flex justify-center gap-10 items-center'>
          <Link href="/" className=' hover:text-orange-500 text-white'>Home</Link>
          <Link href="/about" className=' hover:text-orange-500 text-white'>About</Link>
          <Link href="/travel" className=' hover:text-orange-500 text-white'>Travel</Link>
          <Link href="/healthy" className=' hover:text-orange-500 text-white'>Healthy</Link>
          <Link href="/technology" className=' hover:text-orange-500 text-white'>Technology</Link>

        </div>
      </div>
    </>
  )
}

export default NavbarPc