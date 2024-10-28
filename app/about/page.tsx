import React from 'react'
import NavbarPc from '../components/NavbarPc'
import NavbarMobile from '../components/NavbarMobile'
import { HeadlineAbout } from '../components/AbousUsComponent/HeadlineAbout'
import PostAbout from '../components/PostAbout'
import Footer from '../components/Footer'
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <NavbarMobile />
        <NavbarPc />
        <HeadlineAbout />
        <PostAbout />
        <Footer />
      </div>
    </>
  )
}

export default page