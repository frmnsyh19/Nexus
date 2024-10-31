import React from "react";
import NewsSections1 from "../components/TravelingComponent/NewsSections1";
import NewsSections2 from "../components/TravelingComponent/NewsSections2";
import { FasilitasGbk } from "../components/TravelingComponent/FasilitasGbk";
import { Peraturan } from "../components/TravelingComponent/Peraturan";
import { NewsSections3 } from "../components/TravelingComponent/NewsSections3";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";
import NavbarPc from "../components/NavbarPc";
import RekomendasiOutfit from "../components/TravelingComponent/RekomendasiOutfit";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col text-neutral bg-slate-100 gap-3 lg:gap-7">
        <NavbarMobile />
        <NavbarPc />
        <NewsSections1 />
        <NewsSections2 />
        <FasilitasGbk />
        <Peraturan />
        <RekomendasiOutfit />
        <NewsSections3 />
        <Footer />
      </div>
    </>
  );
};

export default page;
