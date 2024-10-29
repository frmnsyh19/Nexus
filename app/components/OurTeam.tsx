import React from 'react'
import '../style.css'
export const OurTeam = () => {
  return (
    <>
      <div className="w-full p-2 flex flex-col justify-center items-center bg-slate-200 ">
        <div className='w-full lg:w-11/12 flex-col p-2 h-full lg:h-96 flex gap-3'>
          <div className=' w-full lg:w-[95%] ms-1 flex flex-col gap-2'>
            <p className=' text-xl text-indigo-900 font-bold'>
              Our Team
            </p>
            <div className=' flex flex-row gap-1'>
              <div className=' bg-orange-600 p-1 w-8'></div>
              <div className=' w-full border-t-gray-500 border-b-gray-500 border-t border-b'></div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-full gap-5 flex-wrap">
            <div className=' w-56 h-72 ' id='team1'>
              <div className=' w-full flex p-2 h-full flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 mt-12 text-white'>
                  <p className=' text-xs'>EKI ELANGMANDA PUTRA</p>
                </div>
                <span className=' text-white'>
                  Nim : 2371510849</span>
              </div>
            </div>
            <div className=' w-56 h-72 ' id='team2'>
              <div className=' w-full flex p-2 h-full flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 mt-11 text-white'>
                  <p className=' text-xs'>Sandy Syahadi</p>
                </div>
                <span className=' text-white'>
                  Nim : 2371510716.</span>
              </div>
            </div>
            <div className=' w-56 h-72 ' id='team3'>
              <div className=' w-full flex p-2 h-full flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 mt-11 text-white'>
                  <p className=' text-xs'>Pamela Ribka</p>
                </div>
                <span className=' text-white'>
                  Nim : 2271510436</span>
              </div>
            </div>
            <div className=' w-56 h-72 ' id='team4'>
              <div className=' w-full flex p-2 h-full flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 mt-12 text-white'>
                  <p className=' text-xs'>Faqih Lukman</p>
                </div>
                <span className=' text-white'>
                  NIM : 2371510187</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 mt-6 flex flex-col justify-center items-center bg-slate-200 ">
        <div className='  lg:w-11/12 flex-col p-2 h-full  flex gap-5'>
          <div className=' w-full lg:w-[95%] ms-1 flex flex-col gap-2'>
            <p className=' text-xl text-indigo-900 font-bold'>
              Our Team
            </p>
            <div className=' flex flex-row gap-1'>
              <div className=' bg-orange-600 p-1 w-8'></div>
              <div className=' w-full border-t-gray-500 border-b-gray-500 border-t border-b'></div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-full gap-5 flex-wrap">

            <div className=' w-56 h-72' id='team5'>
              <div className=' w-full flex p-2 mt-12 h-full flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 text-white'>
                  <p className=' text-xs'>Kemal Muhammad Fasya</p>
                </div>
                <span className=' text-white'>
                  NIM : 2371510039</span>
              </div>
            </div>
            <div className=' w-56 h-72' id='team6'>
              <div className=' w-full flex p-2 h-full mt-12 flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 text-white'>
                  <p className=' text-xs uppercase'>Riffadhil ilham anggara</p>
                </div>
                <span className=' text-white'>
                  NIM : 2371510708</span>
              </div>
            </div>
            <div className=' w-56 h-72' id='team7'>
              <div className=' w-full flex p-2 h-full mt-12 flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 text-white'>
                  <p className=' text-xs'>Ica Pratiwi Amran</p>
                </div>
                <span className=' text-white'>
                  NIM : 2371510963</span>
              </div>
            </div>
            <div className=' w-56 h-72' id='team8'>
              <div className=' w-full flex p-2 h-full mt-12 flex-col gap-1 justify-center items-start'>
                <div className=' p-2 bg-rose-400 text-white'>
                  <p className=' text-xs uppercase'>Aldi Yudha Pratama</p>
                </div>
                <span className=' text-white'>
                  NIM : 2371510781</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
