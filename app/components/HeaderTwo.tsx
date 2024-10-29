import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import '../style.css'
import { IoIosTimer } from "react-icons/io";
const HeaderTwo = () => {
  return (
    <>
      <div className="w-full bg-indigo-950 p-2 flex justify-center items-center">
        <div className="w-full lg:w-[80%] gap-3 lg:gap-4  h-full flex flex-col justify-start p-2">
          <div className=' w-full flex flex-col gap-2'>
            <p className=' text-lg text-white font-bold'>Tranding News</p>
            <div className=' flex flex-row w-full gap-1'>
              <div className=' bg-orange-600 p-1 w-8'></div>
              <div className=' w-full border-t-gray-500 border-b-gray-500 border-t border-b'></div>
            </div>
          </div>
          <div className=' w-full flex  lg:flex-row flex-col lg:gap-1 gap-2'>
            <div className="w-full lg:w-[50%] h-44 lg:h-60 p-2" id='tranding1'>
              <div className=' w-full h-full flex flex-col justify-end items-start'>
                <div className=" w-[75%] p-2 flex flex-col gap-2 justify-start items-start">
                  <div className='p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500'>
                    NEWS
                  </div>
                  <span className=' text-white font-bold'>The Growing Need For Effective
                    Password Management</span>
                  <div className=' w-full p-1 flex gap-2 text-gray-400 flex-row'>
                    <div className="flex flex-row gap-1 items-center text-xxs text-gray-400">
                      <FiCalendar />
                      <span>27 AUGUST 2024</span>
                    </div>
                    <div className=" flex flex-row gap-1 items-center text-xxs text-gray-400">
                      <IoIosTimer />
                      <span>20 mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] h-44 lg:h-60 p-2" id='tranding2'>
              <div className=' w-full h-full flex flex-col justify-end items-start'>
                <div className=" w-[75%] p-2 flex flex-col gap-2 justify-start items-start">
                  <div className='p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500'>
                    NEWS
                  </div>
                  <span className=' text-white font-bold'>Write Better CSS By Borrowing Ideas
                    From JavaScript Functions</span>
                  <div className=' w-full p-1 flex gap-2 text-gray-400 flex-row'>
                    <div className="flex flex-row gap-1 items-center text-xxs text-gray-400">
                      <FiCalendar />
                      <span>27 AUGUST 2024</span>
                    </div>
                    <div className=" flex flex-row gap-1 items-center text-xxs text-gray-400">
                      <IoIosTimer />
                      <span>20 mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-2 lg:flex-row flex-col">
            <div className="w-full lg:w-[45%] flex justify-start items-center flex-row gap-3">
              <div className=' w-32 lg:w-[12rem] h-24 lg:h-24 flex ' id='trandingpost1'>
              </div>
              <div className=' w-full flex flex-col p-1'>
                <div className=' bg-gray-500 w-20 p-1 rounded-md flex justify-center items-center'>
                  <p className=' text-base text-white uppercase'>Bitcoin</p>
                </div>
                <div className=' w-full  mt-3'>
                  <p className=' text-sm text-white capitalize'>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className="w-full flex justify-start text-start items-center gap-1 mt-2">
                  <FiCalendar className=' text-gray-500 text-base' />
                  <span className=' text-gray-500'>27 AUGUST, 2024</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex items-center flex-row gap-3">
              <div className=' w-32 lg:w-[12rem] h-24 lg:h-24 flex' id='trandingpost2'>
              </div>
              <div className=' w-full flex flex-col p-1'>
                <div className=' bg-gray-500 w-20 p-1 rounded-md flex justify-center items-center'>
                  <p className=' text-base text-white uppercase'>Bitcoin</p>
                </div>
                <div className=' w-full  mt-3'>
                  <p className=' text-sm text-white capitalize'>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className="w-full flex justify-start text-start items-center gap-1 mt-2">
                  <FiCalendar className=' text-gray-500 text-base' />
                  <span className=' text-gray-500 text-base'>27 AUGUST, 2024</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex items-center flex-row gap-3">
              <div className=' w-32 lg:w-[12rem] h-24 lg:h-24 flex' id='trandingpost3'>
              </div>
              <div className=' w-full flex flex-col p-1'>
                <div className=' bg-gray-500 w-20 p-1 rounded-md flex justify-center items-center'>
                  <p className=' text-base text-white uppercase'>Bitcoin</p>
                </div>
                <div className=' w-full  mt-3'>
                  <p className=' text-sm text-white capitalize'>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className="w-full flex justify-start text-start items-center gap-1 mt-2">
                  <FiCalendar className=' text-gray-500 text-base' />
                  <span className=' text-gray-500'>27 AUGUST, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTwo