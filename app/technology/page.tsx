import React from 'react'
import NavbarPc from '../components/NavbarPc'
import NavbarMobile from '../components/NavbarMobile'
import { HeaderTechnology } from '../components/HeaderTechnology'
import { NewsTekonlogi1 } from '../components/TechnologyComponents/NewsTekonlogi1'
import { NewsTeknologi2 } from '../components/TechnologyComponents/NewsTeknologi2'
import NewsTeknologi3 from '../components/TechnologyComponents/NewsTeknologi3'
import Footer from '../components/Footer'
const page = () => {
  return (
    <>
      <div className=' w-full flex flex-col p-1 text-neutral bg-slate-100'>
        <NavbarPc />
        <NavbarMobile />
        <HeaderTechnology />
        <NewsTekonlogi1 />
        <NewsTeknologi2 />
        <NewsTeknologi3 />
        <Footer />
      </div>
    </>
  )
}

export default page