import React from 'react'
import '../style.css'
export const HeaderTechnology = () => {
  return (
    <>
      <div className=' w-full flex lg:flex-row gap-0 flex-col justify-start items-center'>
        <div className="lg:w-1/2 w-full h-80" id='headerteknologi1'>
          <div className=' w-full h-full flex-col flex justify-between items-center'>
            <div className="w-full"></div>
            <div className="w-full p-3 justify-center items-center gap-3 flex flex-col">
              <div className='p-2 text-sm text-white rounded-lg bg-rose-400'>
                Read More
              </div>
              <div className=' w-72 text-center'>
                <span className=' text-base text-center text-white font-bold'>
                  UNGKAP TREN MASA DEPAN TEKNOLOGI KECERDASAN BUATAN (AI) DI INDONESIA
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-80" id='headerteknologi2'>
          <div className=' w-full h-full flex-col flex justify-between items-center'>
            <div className="w-full"></div>
            <div className="w-full p-3 justify-center items-center gap-3 flex flex-col">
              <div className='p-2 text-sm text-white rounded-lg bg-rose-400'>
                Read More
              </div>
              <div className=' w-72 text-center'>
                <span className=' text-base text-center text-white font-bold'>
                  TEKNOLOGI CASHLESS DI INDONESIA DAN MASALAH YANG MUNCUL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
