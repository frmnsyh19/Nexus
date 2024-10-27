import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { IoTimerOutline } from 'react-icons/io5'
export const ListPopulerNews = () => {
  return (
    <>
      <div className=' w-full  flex flex-col lg:p-0 p-3 justify-start gap-3'>
        <div className=' w-full flex flex-col justify-start gap-2'>
          <div className="w-full flex flex-col border-b border-gray-400 gap-1 justify-start p-1">
            <div className=' w-min border rounded-md border-gray-400 p-2'>
              <p className=' text-sm uppercase font-bold text-gray-500'>NEWS</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-sm capitalize text-indigo-900'>
                  Inspiring Web Design And UX Showcases</p>
                <div className='flex items-center w-full gap-2 flex-row'>
                  <div className=' flex flex-row gap-1 items-center'>
                    <FiCalendar className=' text-base text-gray-400' />
                    <p className=' text-sm text-gray-400'>24 Oct 2024</p>
                  </div>
                  <div className=' flex flex-row gap-1 items-center'>
                    <IoTimerOutline className=' text-base text-gray-400' />
                    <p className=' text-sm text-gray-400'>25 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border-b border-gray-400 gap-1 justify-start p-1">
            <div className=' w-min border rounded-md border-gray-400 p-2'>
              <p className=' text-sm uppercase font-bold text-gray-500'>CRYPTO</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-sm capitalize text-indigo-900'>
                  Getting Internationalization (i18n) Right With Remix And</p>
                <div className='flex items-center w-full gap-2 flex-row'>
                  <div className=' flex flex-row gap-1 items-center'>
                    <FiCalendar className=' text-base text-gray-400' />
                    <p className=' text-sm text-gray-400'>24 Oct 2024</p>
                  </div>
                  <div className=' flex flex-row gap-1 items-center'>
                    <IoTimerOutline className=' text-base text-gray-400' />
                    <p className=' text-sm text-gray-400'>25 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border-b border-gray-400 gap-1 justify-start p-1">
            <div className=' w-min border rounded-md border-gray-400 p-2'>
              <p className=' text-sm uppercase font-bold text-gray-500'>ECONOMY</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-sm capitalize text-indigo-900'>
                  A Step-By-Step Guide To Building Accessible Carousels</p>
                <div className='flex items-center w-full gap-2 flex-row'>
                  <div className=' flex flex-row gap-1 items-center'>
                    <FiCalendar className=' text-base text-gray-400' />
                    <p className=' text-sm text-gray-400'>24 Oct 2024</p>
                  </div>
                  <div className=' flex flex-row gap-1 items-center'>
                    <IoTimerOutline className=' text-base text-gray-400' />
                    <p className=' text-sm text-gray-400'>25 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
