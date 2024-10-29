import React from 'react'
import { HeadlineNews } from '../components/HeadlineNews'
import NavbarPc from '../components/NavbarPc'
import { NewsHealthySections1 } from '../components/healthyComponent/NewsHealthySections1'
import { NewsHealthySections2 } from '../components/healthyComponent/NewsHealthySections2'
import { NewsHealthySections3 } from '../components/healthyComponent/NewsHealthySections3'
import { NewsHealthySections4 } from '../components/healthyComponent/NewsHealthySections4'
import { NewsHealthySections5 } from '../components/healthyComponent/NewsHealthySections5'
import { NewsHealthySections7 } from '../components/healthyComponent/NewsHealthySections7'
import { NewsHealthySections8 } from '../components/healthyComponent/NewsHealthySections8'
import { NewsHealthySections6 } from '../components/healthyComponent/NewsHealthySections6'
import Footer from '../components/Footer'
import NavbarMobile from '../components/NavbarMobile'

const page = () => {
  return (
    <>
      <div className=' w-full flex flex-col gap-2 lg:gap-5 bg-slate-100 text-neutral'>
        <NavbarPc />
        <NavbarMobile />
        <HeadlineNews />
        <NewsHealthySections1 />
        <NewsHealthySections2 />
        <NewsHealthySections3 />
        <NewsHealthySections4 />
        <NewsHealthySections5 />
        <NewsHealthySections6 />
        <NewsHealthySections7 />
        <NewsHealthySections8 />
        <Footer />
      </div>
    </>
  )
}

export default page