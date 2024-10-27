import { FiArrowUpRight } from "react-icons/fi";
import Footer from "./components/Footer";
import { HeaderOne } from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo";
import { MiningStore } from "./components/MiningStore";
import NavbarMobile from "./components/NavbarMobile";
import NavbarPc from "./components/NavbarPc";
import './style.css'
import Button from '@mui/material/Button'
import { WeeklyBestNews } from "./components/WeeklyBestNews";
import { Iklan } from "./components/Iklan";
export default async function Home() {


  return (
    <>
      <div className=" w-full flex flex-col">
        <NavbarMobile />
        <NavbarPc />
        <HeaderOne />
        <HeaderTwo />
        <div className=" w-full mt-5 flex justify-center items-center p-2">
          <div className="w-full lg:w-[75%] h-32 flex flex-row">
            <div className=" w-60 h-full" id="bennerimg2"></div>
            <div className="w-full bg-green-200 h-full flex justify-center items-center p-2">
              <div className="w-full  lg:w-11/12 flex justify-between p-2 items-center">
                <div className=" w-80">
                  <span className=" text-lg text-indigo-800 font-bold">
                    Discover The Powerful Features Of Telling Story
                  </span>
                </div>
                <Button variant="contained" className=" bg-blue-900" size="small">
                  check online update <FiArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 flex justify-center p-2">
          <div className=" w-full  lg:w-[85%] flex flex-col lg:flex-row justify-start">
            <div className=" w-full flex flex-col p-1">
              <MiningStore />
              <WeeklyBestNews />
            </div>
            <Iklan />
          </div>
        </div>
        <Footer />
      </div >
    </>
  );
}



