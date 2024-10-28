import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { PopulerPosts } from './PopulerPosts'
import { ListPopulerNews } from './ListPopulerNews'
export const Iklan = () => {
  return (
    <>
      <div className=' w-full lg:w-[25%] flex flex-col h-full  gap-2 '>
        <div className=' w-full p-2 flex flex-col justify-start'>
          <div className=' w-full flex flex-col justify-start gap-1'>
            <p className=' text-lg text-indigo-900 capitalize font-bold'>
              Follow Us
            </p>
            <div className=' flex flex-row w-full gap-2'>
              <div className=' bg-orange-600 p-1 w-8'></div>
              <div className=' w-full border-t-2 border-b-2'></div>
            </div>
          </div>
          <div className='border mt-6 w-full p-1 flex justify-center items-center'>
            <div className="w-3/4 lg:w-full flex gap-1 flex-row flex-wrap justify-center">
              <div className=' w-36 lg:w-28 flex flex-row p-3  justify-center gap-1 items-center bg-slate-100'>
                <span className=' text-sm'><FiFacebook /></span>
                <span className=' text-sm'>Facebook </span>
              </div>
              <div className=' w-36 lg:w-28 flex flex-row p-3  justify-center gap-1 items-center bg-slate-100'>
                <span className=' text-sm'><FiInstagram /></span>
                <span className=' text-sm'>Instagram </span>
              </div>
              <div className=' w-36 lg:w-28 flex flex-row p-3  justify-center gap-1 items-center bg-slate-100'>
                <span className=' text-sm'><FiTwitter /></span>
                <span className=' text-sm'>Twiter</span>
              </div>
              <div className=' w-36 lg:w-28 flex flex-row p-3  justify-center gap-1 items-center bg-slate-100'>
                <span className=' text-sm'><FiLinkedin /></span>
                <span className=' text-sm'>Linkedin </span>
              </div>
            </div>
          </div>
          <div className=' w-full bg-sky-900 mt-7 p-2 flex justify-center items-center'>
            <div className="w-full flex gap-4 flex-col p-1 justify-center items-center">
              <div className=' w-full p-2 flex justify-center flex-col gap-4 '>
                <p className=' text-xl capitalize text-slate-50 font-bold text-center'>Daily Newslatter</p>
                <span className=' text-base text-slate-50  text-center'>Get All The Top From Blogs To Keep Track</span>
              </div>
              <div className=' w-full flex flex-col justify-center items-center gap-2'>
                <input type="text" className='input w-full text-black bg-slate-50 text-center placeholder-gray-500' placeholder='Enter Your e-mail' />
                <button className=' w-full btn bg-rose-500 border-none text-white uppercase'>SUBSCRIBE NOW</button>
                <div className=' w-full flex justify-center items-center gap-2 mt-1 '>
                  <input type="checkbox" className=' checkbox border-gray-400' id="" />
                  <span className=' text-gray-400 text-xs'>I agree to the terms & conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopulerPosts />
        <ListPopulerNews />
      </div>
    </>
  )
}
