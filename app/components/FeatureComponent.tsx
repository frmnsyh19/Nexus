import React from 'react'
import { FiCalendar } from 'react-icons/fi'

export const FeatureComponent = () => {
  return (
    <>
      <div className=' w-full lg:w-1/4 flex flex-col lg:p-0 p-3 justify-start gap-3'>
        <div className="w-full p-3 flex justify-start items-center border-l-8 border-l-orange-600 h-10 bg-slate-100">
          <p className=' text-lg text-indigo-900 font-bold'>Feature</p>
        </div>
        <div className=' w-full flex flex-col justify-start gap-2'>
          <div className="w-full flex flex-col border-b border-gray-400 gap-3 justify-start p-1">
            <div className=' w-min border rounded-md border-gray-400 p-2'>
              <p className=' text-base uppercase font-bold text-gray-500'>News</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-base capitalize text-indigo-900'>
                  Communication For Everyday Meetings
                </p>
                <div className='p-1 flex items-center flex-row gap-2'>
                  <FiCalendar className=' text-base text-gray-400' />
                  <p className=' text-base text-gray-400'>24 Oct 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border-b border-gray-400 gap-3 justify-start p-1">
            <div className=' w-min border rounded-md border-gray-400 p-2'>
              <p className=' text-base uppercase font-bold text-gray-500'>Economy</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-base capitalize text-indigo-900'>
                  Building Your Security
                  Strategy
                </p>
                <div className='p-1 flex items-center flex-row gap-2'>
                  <FiCalendar className=' text-base text-gray-400' />
                  <p className=' text-base text-gray-400'>24 Oct 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border-b border-gray-400 gap-3 justify-start p-1">
            <div className=' w-min border rounded-md border-gray-400 p-2'>
              <p className=' text-base uppercase font-bold text-gray-500'>Market</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-base capitalize text-indigo-900'>Phone Numbers For
                  Web Designers</p>
                <div className='p-1 flex items-center flex-row gap-2'>
                  <FiCalendar className=' text-base text-gray-400' />
                  <p className=' text-base text-gray-400'>24 Oct 2024</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className=' w-full flex flex-col p-1 justify-start gap-1'>
                <p className=' font-bold text-base capitalize text-indigo-900'>The Butter Chocolate
                  Cookies Daily</p>
                <div className='p-1 flex items-center flex-row gap-2'>
                  <FiCalendar className=' text-base text-gray-400' />
                  <p className=' text-base text-gray-400'>24 Oct 2024</p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}
