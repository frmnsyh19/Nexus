import Image from 'next/image'
import React from 'react'
import { FiUser } from 'react-icons/fi'

const NewsSections1 = () => {
  return (
    <>
      <div className='w-full flex flex-col gap-3 p-2 justify-center items-center'>
        <div className=" w-full lg:w-[80%] flex justify-center ">
          <Image src={'/image/headernews1.png'} className=' w-full' height={500} width={700} alt='headerImage' />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className=" w-full lg:w-[90%] flex flex-col p-1 gap-2">
            {/* title */}
            <div className=' w-full p-4 flex flex-col'>
              <div className=' w-full flex justify-center items-center p-1'>
                <span className=' text-xl font-bold text-center uppercase'>
                  Hutan kota gbk, Tempat Healing para genz
                </span>
              </div>
              <div className="w-full flex justify-center items-center p-1">
                <FiUser className=' text-base text-gray-400' />
                <span className=' text-gray-400 text-base capitalize'>
                  Faqih lukman - 2371510187
                </span>
              </div>
            </div>
            {/* news */}
            <div className="w-full p-1 text-justify">
              <span className=' text-justify'>
                Hutan Kota GBK menjadi tempat healing alternatif ditengah
                kesibukan para Genz. Dibuat pada tahun 2018 dengan luas tanah
                4,5 hektar,  Hutan Kota GBK menjadi ruang terbuka hijau di jakarta,
                pepohonan yang rindang beserta rumput hijau disekitar membuat udara
                segar di tengah kota, tempat ini biasa digunakan untuk bersantai bagi
                sebagian masyarakat terutama para GenZ setelah melewati berbagai aktifitasnya, juga terdapat Jogging track dan Spot foto instagramable yang tentunya menjadi daya tarik pengunjung. Selain itu dengan pemandangan nya yang indah
                Hutan Kota GBK juga sering diadakan acara kenegaraan hingga festival musik.
              </span>
            </div>
            <div className=' w-full flex mt-6 justify-center items-center'>
              <Image src={'/image/headlinenewsgbk2.jpg'} width={350} height={300} alt='' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default NewsSections1