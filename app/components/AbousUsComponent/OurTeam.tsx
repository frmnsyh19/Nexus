import React from 'react'

export const OurTeam = () => {
  return (
    <>
      <div className="w-full p-2 flex flex-col justify-center items-center bg-slate-200 ">
        <div className='w-full lg:w-11/12 flex-col p-2 h-full lg:h-96 flex gap-3'>
          <div className=' w-full lg:w-[95%] ms-1 flex flex-col gap-2'>
            <p className=' text-lg text-indigo-900 font-bold'>
              Mining Stories
            </p>
            <div className=' flex flex-row gap-1'>
              <div className=' bg-orange-600 p-1 w-8'></div>
              <div className=' w-full border-t-gray-500 border-b-gray-500 border-t border-b'></div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-full gap-5 flex-wrap">
            <div className=' w-56 h-60 border border-red-500'></div>
            <div className=' w-56 h-60 border border-red-500'></div>
            <div className=' w-56 h-60 border border-red-500'></div>
            <div className=' w-56 h-60 border border-red-500'></div>
          </div>
        </div>
      </div>
    </>
  )
}
