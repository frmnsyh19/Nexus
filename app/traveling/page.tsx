import React from 'react'
import NewsSections1 from '../components/TravelingComponent/NewsSections1'
import NewsSections2 from '../components/TravelingComponent/NewsSections2'
import { FasilitasGbk } from '../components/TravelingComponent/FasilitasGbk'
import { Peraturan } from '../components/TravelingComponent/Peraturan'
import { NewsSections3 } from '../components/TravelingComponent/NewsSections3'
import Footer from '../components/Footer'
import NavbarMobile from '../components/NavbarMobile'
import NavbarPc from '../components/NavbarPc'

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col text-neutral bg-slate-100 gap-3">
        <NavbarMobile />
        <NavbarPc />
        <NewsSections1 />
        <NewsSections2 />
        <FasilitasGbk />
        <Peraturan />
        <NewsSections3 />
        <Footer />
      </div>
    </>
  )
}

export default page