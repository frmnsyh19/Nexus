import Image from 'next/image'
import React from 'react'

export const Peraturan = () => {
  return (
    <>
      <div className=' w-full flex justify-center items-center'>
        <div className="w-full lg:w-[80%] flex flex-col gap-3 p-2 lg:p-1 justify-center items-center">
          <div className="w-full p-1 flex flex-col gap-2">
            <span className='uppercase font-bold text-3xl'>
              Peraturan masuk
              Hutan Kota GBK
            </span>
            <span className=' text-base'>
              Sebelum memasuki area Hutan Kota GBK, pengunjung akan melihat beberapa peraturan yang
              wajib diikuti untuk masukDikutip pada kompas.com ( 2023 ) Diantaranya peraturan yang wajib
              patuhi yaitu :
            </span>
          </div>
          {/* Larangan membawa aneka kendaraan beroda
          (selain kursi roda dan stroller) seperti sepeda,
          skateboard dan sepatu roda. */}
          <div className="w-full flex flex-col lg:flex-row gap-1 p-1">
            <div className="w-full lg:w-2/3 flex flex-col p-1 gap-1">
              <div className=' w-full flex  lg:h-16 p-2 flex-col'>
                <div className=' w-full p-0 flex gap-3 items-center'>
                  <div className=' p-2 flex justify-center items-center rounded-xl bg-orange-300'>
                    <Image src={'/larangan/larangan1.png'} width={25} height={25} alt='larangan1' />
                  </div>
                  <span className=' text-base'>Larangan membawa hewan peliharaan. </span>
                </div>
              </div>
              <div className=' w-full flex  lg:h-16 p-2 flex-col'>
                <div className=' w-full p-0 flex gap-3 items-center'>
                  <div className=' p-2 flex justify-center items-center rounded-xl bg-orange-500'>
                    <Image src={'/larangan/larangan2.png'} width={37} height={37} alt='larangan2' />
                  </div>
                  <span className=' text-base'>
                    {` Larangan membawa aneka kendaraan beroda
          (selain kursi roda dan stroller) seperti sepeda,
          skateboard dan sepatu roda`}
                  </span>
                </div>
              </div>
              <div className=' w-full flex lg:h-16 p-2 flex-col'>
                <div className=' w-full p-0 flex gap-3 items-center'>
                  <div className=' p-2 flex justify-center items-center rounded-xl bg-teal-800'>
                    <Image src={'/larangan/larangan3.png'} width={25} height={25} alt='larangan1' />
                  </div>
                  <span className=' text-base'>
                    Larangan membawa minuman beralkohol,
                    narkoba, dan segala jenis senjata tajam.
                  </span>
                </div>
              </div>
              <div className=' w-full flex  lg:h-16 p-2 flex-col'>
                <div className=' w-full p-0 flex gap-3 items-center'>
                  <div className=' p-2 flex justify-center items-center rounded-xl bg-pink-400'>
                    <Image src={'/larangan/larangan5.png'} width={25} height={25} alt='larangan1' />
                  </div>
                  <span className=' text-base'>
                    Larangan melakukan aktivitas jual beli.
                  </span>
                </div>
              </div>
              <div className=' w-full flex  h-16 p-2 flex-col'>
                <div className=' w-full p-0 flex gap-3 items-center'>
                  <div className=' p-2 flex justify-center items-center rounded-xl bg-purple-600'>
                    <Image src={'/larangan/larangan6.png'} width={25} height={25} alt='larangan1' />
                  </div>
                  <span className=' text-base'>
                    Bila ingin menggunakan lighting, drone, microphone,
                    dan tripod harus berizin terlebih dulu
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 h-full flex justify-center items-center">
              <img src="/larangan/papanlarangan.jpg" className='w-full h-[21rem]' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
