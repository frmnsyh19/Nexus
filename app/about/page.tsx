import React from 'react'
import NavbarPc from '../components/NavbarPc'
import NavbarMobile from '../components/NavbarMobile'
import { HeadlineAbout } from '../components/AbousUsComponent/HeadlineAbout'

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <NavbarMobile />
        <NavbarPc />
        <HeadlineAbout />
      </div>
    </>
  )
}

export default page