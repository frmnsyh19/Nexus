import React from 'react'
import '../style.css'
export const Benner2 = () => {
  return (
    <>
      <div className=" w-full flex flex-row  bg-blue-600 h-28">
        <div className=" w-4/6 lg:w-1/2 h-full  flex justify-around items-center p-1 lg:p-4">
          <span className=' text-slate-50 font-bold text-sm lg:text-lg'>
            Best Paker Alffiliate Programs
          </span>
          <button className='btn btn-sm rounded-2xl bg-slate-50 text-black capitalize font-semibold'>
            see details
          </button>
        </div>
        <div className=' w-1/3 lg:w-1/2 h-full flex justify-center items-center' id='benner3'></div>
      </div>
    </>
  )
}
