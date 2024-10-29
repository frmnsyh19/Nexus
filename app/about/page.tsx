"use client"

import React from 'react'
import NavbarPc from '../components/NavbarPc'
import NavbarMobile from '../components/NavbarMobile'
import { HeadlineAbout } from '../components/AbousUsComponent/HeadlineAbout'
import PostAbout from '../components/PostAbout'
import Footer from '../components/Footer'
import Head from 'next/head'

const page = () => {
  return (
    <>
      <Head>
        <title>Nexus | About</title>
      </Head>
      <div className="w-full flex flex-col bg-slate-100 text-neutral">
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