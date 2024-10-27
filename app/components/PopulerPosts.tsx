import Image from 'next/image'
import React from 'react'

export const PopulerPosts = () => {
  return (
    <>
      <div className="w-full  flex flex-col justify-start p-2 gap-2">
        <div className=' w-full flex flex-col justify-start gap-1'>
          <p className=' text-lg text-indigo-900 capitalize font-bold'>
            Popular News
          </p>
          <div className=' flex flex-row w-full gap-2'>
            <div className=' bg-orange-600 p-1 w-8'></div>
            <div className=' w-full border-t-2 border-b-2'></div>
          </div>
        </div>
        <div className=' w-full flex justify-center items-center'>
          <Image width={100} className=' w-full h-28' height={50} src='/posts/posts3.jpg' alt='' />
        </div>
      </div>
    </>
  )
}
