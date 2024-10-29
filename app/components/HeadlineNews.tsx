import React from 'react'
import '../style.css'
import Link from 'next/link'
export const HeadlineNews = () => {
  return (
    <>
      <div className=' w-full flex flex-col flex-wrap lg:flex-row justify-center lg:gap-2 gap-1 items-center lg:p-3'>
        {/* 1 */}
        <div className=' w-full lg:w-[30rem] h-56 lg:h-60' id='bgheaderone-1'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-64  gap-4 flex flex-col justify-center items-center'>
              <Link href='#basket'>
                <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                  Read More
                </div>
              </Link>
              <span className=' text-sm lg:text-base text-white font-semibold uppercase text-center'>
                seberapa efektif workout dalam basket
              </span>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=' w-full lg:w-[30rem] h-56 lg:h-60' id='bgheaderone-2'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-80 gap-4 flex flex-col justify-center items-center'>
              <Link href='#polamakan'>
                <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                  Read More
                </div>
              </Link>
              <span className=' text-sm lg:text-base font text-white font-semibold uppercase text-center'>
                Cara Efektif Membentuk Tubuh Ideal Dengan Pola Makan dan Olahraga Yang Tapat
              </span>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className=' w-full lg:w-[30rem] border border-red-700 h-56 lg:h-60' id='bgheaderhealthy4'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-80 gap-4 flex flex-col justify-center items-center'>
              <Link href='#mental'>
                <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                  Read More
                </div>
              </Link>
              <span className=' font-semibold text-base text-white font-sem uppercase text-center'>
                Kesehatan Mental Bagi Karyawan
              </span>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className=' w-full lg:w-[30rem] border border-red-700 h-56 lg:h-60' id='bgheaderhealthy5'>
          <div className=' w-full h-full flex flex-col justify-end items-center p-2'>
            <div className=' w-80 gap-4 flex flex-col justify-center items-center'>
              <Link href='#gym'>
                <div className=' hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase'>
                  Read More
                </div>
              </Link>
              <span className=' font-semibold text-base text-white font-sem uppercase text-center'>
                Pola Hidup Sehat Dengan GYM
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
