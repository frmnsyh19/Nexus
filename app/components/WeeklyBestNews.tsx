import React from 'react'
import { Benner2 } from './Benner2'
import Image from 'next/image'
import { FiCalendar } from 'react-icons/fi'
import { IoTimerOutline } from 'react-icons/io5'

export const WeeklyBestNews = () => {
  return (
    <>
      <div className=' w-full flex flex-col gap-4'>
        <div className="w-full p-3">
          <Benner2 />
        </div>
        <div className=' w-full p-2 flex justify-center items-center gap-2 flex-wrap'>
          <div className="w-full lg:w-[45%]  flex flex-col gap-2 p-1" id=''>
            <Image width={100} className=' w-full h-48' height={50} src='/image/market.jpeg' alt='market' />
            <span className=' text base font-bold text-indigo-900 capitalize'>How to protect your appwith a model based on JSONDiff</span>
            <div className=' w-full flex flex-row items-center gap-2'>
              <div className=' flex flex-row gap-1 items-center'>
                <FiCalendar className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>24 Oct 2024</p>
              </div>
              <div className=' flex flex-row gap-1 items-center'>
                <IoTimerOutline className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>25 min</p>
              </div>
            </div>
            <span className=' text-base text-gray-400'>
              Browned Butter And Brown Sugar Caramelly Oodness
              cripsy edgesthick and soft centers melty little
              Puddles Of Chocolate Y First Favorite
            </span>
          </div>
          <div className="w-full lg:w-[45%]  flex flex-col gap-2 p-1">
            <Image width={100} className=' w-full h-48' height={50} src='/image/post5.jpeg' alt='' />
            <span className=' text base font-bold text-indigo-900 capitalize'>How to protect your appwith a model based on JSONDiff</span>
            <div className=' w-full flex flex-row items-center gap-2'>
              <div className=' flex flex-row gap-1 items-center'>
                <FiCalendar className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>24 Oct 2024</p>
              </div>
              <div className=' flex flex-row gap-1 items-center'>
                <IoTimerOutline className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>25 min</p>
              </div>
            </div>
            <span className=' text-base text-gray-400'>
              Browned Butter And Brown Sugar Caramelly Oodness
              cripsy edgesthick and soft centers melty little
              Puddles Of Chocolate Y First Favorite
            </span>
          </div>
          <div className="w-full lg:w-[45%]  flex flex-col gap-2 p-1">
            <Image width={100} className=' w-full h-48' height={50} src='/image/posts1.jpg' alt='' />
            <span className=' text base font-bold text-indigo-900 capitalize'>How to protect your appwith a model based on JSONDiff</span>
            <div className=' w-full flex flex-row items-center gap-2'>
              <div className=' flex flex-row gap-1 items-center'>
                <FiCalendar className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>24 Oct 2024</p>
              </div>
              <div className=' flex flex-row gap-1 items-center'>
                <IoTimerOutline className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>25 min</p>
              </div>
            </div>
            <span className=' text-base text-gray-400'>
              Browned Butter And Brown Sugar Caramelly Oodness
              cripsy edgesthick and soft centers melty little
              Puddles Of Chocolate Y First Favorite
            </span>
          </div>
          <div className="w-full lg:w-[45%]  flex flex-col gap-2 p-1">
            <Image width={100} className=' w-full h-48' height={50} src='/image/posts6.jpg' alt='' />
            <span className=' text base font-bold text-indigo-900 capitalize'>How to protect your appwith a model based on JSONDiff</span>
            <div className=' w-full flex flex-row items-center gap-2'>
              <div className=' flex flex-row gap-1 items-center'>
                <FiCalendar className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>24 Oct 2024</p>
              </div>
              <div className=' flex flex-row gap-1 items-center'>
                <IoTimerOutline className=' text-base text-gray-400' />
                <p className=' text-sm text-gray-400'>25 min</p>
              </div>
            </div>
            <span className=' text-base text-gray-400'>
              Browned Butter And Brown Sugar Caramelly Oodness
              cripsy edgesthick and soft centers melty little
              Puddles Of Chocolate Y First Favorite
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
