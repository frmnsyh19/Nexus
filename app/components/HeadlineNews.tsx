import React from 'react'
import '../style.css'
export const HeadlineNews = () => {
  return (
    <>
      <div className=' w-full flex flex-col flex-wrap lg:flex-row justify-center lg:gap-2 gap-1 items-center lg:p-3'>
        {/* 1 */}
        <div className=' w-full lg:w-[25rem] h-56 lg:h-60' id='bgheaderone-1'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-64  gap-4 flex flex-col justify-center items-center'>
              <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                News
              </div>
              <span className=' text-sm lg:text-base text-white font-semibold uppercase text-center'>
                seberapa efektif workout dalam basket
              </span>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=' w-full lg:w-[25rem] h-56 lg:h-60' id='bgheaderone-2'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-64 gap-4 flex flex-col justify-center items-center'>
              <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                Read More
              </div>
              <span className=' text-sm lg:text-base font text-white font-semibold uppercase text-center'>
                seberapa efektif workout dalam basket
              </span>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=' w-full lg:w-[25rem] border border-red-700 h-56 lg:h-60' id='bgheaderhealthy3'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-80 gap-4 flex flex-col justify-center items-center'>
              <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                Read More
              </div>
              <span className=' font-semibold text-base text-white font-sem uppercase text-center'>
                The Growing Need for effective password management
              </span>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className=' w-full lg:w-[25rem] border border-red-700 h-56 lg:h-60' id='bgheaderhealthy4'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-80 gap-4 flex flex-col justify-center items-center'>
              <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                Read More
              </div>
              <span className=' font-semibold text-base text-white font-sem uppercase text-center'>
                The Growing Need for effective password management
              </span>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className=' w-full lg:w-[25rem] border border-red-700 h-56 lg:h-60' id='bgheaderhealthy5'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-80 gap-4 flex flex-col justify-center items-center'>
              <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                Read More
              </div>
              <span className=' font-semibold text-base text-white font-sem uppercase text-center'>
                The Growing Need for effective password management
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
