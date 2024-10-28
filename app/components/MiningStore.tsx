



import React from 'react'

import { FiCalendar, FiUser } from 'react-icons/fi';
import '../style.css'

export const MiningStore = async () => {


  return (
    <>
      <div className="w-full flex flex-col lg:justify-start items-center justify-center gap-4 p-2">
        <div className=' w-full lg:w-[95%] ms-1 flex flex-col gap-2'>
          <p className=' text-lg text-indigo-900 font-bold'>
            Mining Stories
          </p>
          <div className=' flex flex-row gap-1'>
            <div className=' bg-orange-600 p-1 w-8'></div>
            <div className=' w-full border-t-gray-500 border-b-gray-500 border-t border-b'></div>
          </div>
        </div>
        {/* container utama */}
        <div className="w-full flex justify-start p-2 gap-2 lg:gap-3 flex-row flex-wrap">
          {/* 1 */}
          <div className=' w-[47%] lg:w-[31%] flex-col flex  justify-start gap-2'>
            <div className=' w-full flex flex-col justify-start gap-2'>
              <div className=' w-full h-36 flex flex-col justify-end items-center' id='mining1'>
                <div className=' badge p-3 bg-rose-400 relative top-2'>
                  <span className=' text-white'>NEWS</span>
                </div>
              </div>
              <div className=' w-full flex justify-start flex-col'>
                <span className=' capitalize text-indigo-900 text-sm font-bold text-center'>What You Miss in the Market Changes</span>
                <div className=' w-full flex lg:gap-0 gap-1 justify-center items-center'>
                  <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                    <FiUser className=' text-xxs lg:text-sm text-gray-500' />
                    <span className=' text-xxs lg:text-sm text-gray-500'>By Admin</span>
                  </div>
                  <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                    <FiCalendar className=' text-xxs lg:text-sm text-gray-500' />
                    <span className=' text-xxs lg:text-sm text-gray-500'>27 AUGUST 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className=' w-[47%] lg:w-[31%] flex-col flex  justify-start gap-2'>
            <div className=' w-full flex flex-col justify-start'>
              <div className=' w-full h-36  flex flex-col justify-end items-center' id='mining2'>
                <div className=' badge p-3 bg-rose-400 relative top-2'>
                  <span className=' text-white'>CRYPTO</span>
                </div>
              </div>
            </div>
            <div className=' w-full flex justify-start flex-col p-1'>
              <span className=' capitalize text-indigo-900 text-sm font-bold text-center'>New Bill Allows to Pay Crypto Taxes</span>
              <div className=' w-full flex lg:gap-0 gap-1 justify-center items-center'>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiUser className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>By Admin</span>
                </div>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiCalendar className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>27 AUGUST 2024</span>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className=' w-[47%] lg:w-[31%] flex-col flex  justify-start gap-2'>
            <div className=' w-full flex flex-col justify-start'>
              <div className=' w-full h-36  flex flex-col justify-end items-center' id='mining3'>
                <div className=' badge p-3 bg-rose-400 relative top-2'>
                  <span className=' text-white'>ECONOMY</span>
                </div>
              </div>
            </div>
            <div className=' w-full flex justify-start flex-col p-1'>
              <span className=' capitalize text-indigo-900 text-sm font-bold text-center'>Crypto Exchange Services In The Us</span>
              <div className=' w-full flex lg:gap-0 gap-1 justify-center items-center'>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiUser className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>By Admin</span>
                </div>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiCalendar className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>27 AUGUST 2024</span>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className=' w-[47%] lg:w-[31%] flex-col flex  justify-start gap-2'>
            <div className=' w-full flex flex-col justify-start'>
              <div className=' w-full h-36 flex flex-col justify-end items-center' id='mining4'>
                <div className=' badge p-3 bg-rose-400 relative top-2'>
                  <span className=' text-white'>BITCOIN</span>
                </div>
              </div>
            </div>
            <div className=' w-full flex justify-start flex-col p-1'>
              <span className=' capitalize text-indigo-900 text-sm font-bold text-center'>Blockchain Can Help with Fundraising</span>
              <div className=' w-full flex lg:gap-0 gap-1 justify-center items-center'>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiUser className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>By Admin</span>
                </div>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiCalendar className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>27 AUGUST 2024</span>
                </div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className=' w-[47%] lg:w-[31%] flex-col flex  justify-start gap-2'>
            <div className=' w-full flex flex-col justify-start'>
              <div className=' w-full h-36 border border-red-600 flex flex-col justify-end items-center' id='mining5'>
                <div className=' badge p-3 bg-rose-400 relative top-2'>
                  <span className=' text-white uppercase'>Market</span>
                </div>
              </div>
            </div>
            <div className=' w-full flex justify-start flex-col p-1'>
              <span className=' capitalize text-indigo-900 text-sm font-bold text-center'>Benefits of Blockchain for Bank Security</span>
              <div className=' w-full flex lg:gap-0 gap-1 justify-center items-center'>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiUser className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>By Admin</span>
                </div>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiCalendar className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>27 AUGUST 2024</span>
                </div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className=' w-[47%] lg:w-[31%] flex-col flex  justify-start gap-2'>
            <div className=' w-full flex flex-col justify-start'>
              <div className=' w-full h-36 border border-red-600 flex flex-col justify-end items-center' id='mining6'>
                <div className=' badge p-3 bg-rose-400 relative top-2'>
                  <span className=' text-white uppercase'>News</span>
                </div>
              </div>
            </div>
            <div className=' w-full flex justify-start flex-col p-1'>
              <span className=' capitalize text-indigo-900 text-sm font-bold text-center'>
                {`Economic Niches That Aren't Occupied`}</span>
              <div className=' w-full flex lg:gap-0 gap-1 justify-center items-center'>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiUser className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>By Admin</span>
                </div>
                <div className=' flex lg:p-1 gap-1 justify-center items-center'>
                  <FiCalendar className=' text-xxs lg:text-sm text-gray-500' />
                  <span className=' text-xxs lg:text-sm text-gray-500'>27 AUGUST 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

