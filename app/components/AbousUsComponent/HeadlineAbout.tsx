
import React from 'react'
import { OurTeam } from '../OurTeam'

export const HeadlineAbout = () => {
  return (
    <>
      <div className=" w-full flex justify-center items-center flex-col ">
        <div className=' w-full lg:w-11/12  p-2'>
          <div className=" w-full flex p-0 lg:p-2 lg:h-96">
            <img src="/image/aboutus.png" className=' w-full h-full' alt="" />
          </div>
          <div className='p-2 flex flex-col lg:h-[30rem] justify-center items-center gap-2'>
            <div className="w-full flex flex-col gap-1">
              <span className='text-indigo-900 text-4xl font-bold uppercase'>
                ABOUT US NEXUS INSIGHT
              </span>
              <span className=' text-base text-indigo-900 font-light'>
                Teknik Peliputan & Penulisan Naskah, Laksmi Rachmaria, Kelas Karyawan, PA
              </span>
            </div>
            <span className=' text-base text-justify mt-2 leading-8'>
              Selamat datang di Nexus Insight, sumber terpercaya untuk berita terkini seputar
              teknologdi, kesehatan, dan perjalanan. Kami hadir untuk menjembatani kebutuhan
              Anda akan informasi yang relevan dan mendalam.Di Nexus Insight, kami percaya bahwa
              hidup diera digital berarti terus bergerak maju, baik itu dengan teknologi terbaru,
              gaya hidup sehat, ataupun menjelajahi dunia. Kami menggabungkan informasi terkini
              dengan perspektif segar dan praktis, yang dirancang khusus untuk membantu Anda
              mengambil keputusan cerdas dalam kehidupan sehari-hari. Baik Anda seorang tech
              enthusiast, pencinta traveling, atau seseorang yang peduli dengan kesehatan fisik dan
              mental, Nexus Insight hadir untuk memberikan berita, tips, dan panduan yang dapat Anda andalkan semua disajikan dengan gaya yang santai, mudah dipahami, dan tentunya relevan dengan kebutuhan Anda. Tetap terhubung, tetap terinspirasi,
              bersama Nexus Insight!
            </span>
          </div>
        </div>
        <OurTeam />

      </div>

    </>
  )
}
