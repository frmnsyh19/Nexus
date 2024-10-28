import Image from 'next/image'
import React from 'react'

const NewsSections2 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-5 flex-col">
        <div className="w-full flex justify-center items-center">
          <div className="w-[90%] flex flex-col p-1 gap-2">
            {/* title */}
            <div className=' w-full flex flex-col'>
              <div className=' w-full flex'>
                <span className=' text-xl font-bold text-start uppercase'>
                  Akses Jalan menuju hutan kota gbk
                </span>
              </div>
            </div>
            {/* news */}
            <div className="w-full p-1 text-justify">
              <span className=' text-justify'>
                Hutan Kota GBK menjadi tempat healing alternatif ditengah kesibukan para Genz. Dibuat pada tahun 2018 dengan luas tanah 4,5 hektar,  Hutan Kota GBK menjadi ruang terbuka hijau di jakarta, pepohonan yang rindang beserta rumput hijau disekitar membuat udara segar di tengah kota, tempat ini biasa digunakan untuk bersantai bagi sebagian masyarakat terutama para GenZ setelah melewati berbagai aktifitasnya, juga terdapat Jogging track dan Spot foto instagramable yang
                tentunya menjadi daya tarik pengunjung. Selain itu dengan pemandangan nya yang indah Hutan Kota GBK juga sering diadakan acara kenegaraan hingga festival musik.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center p-1 gap-2">
          <Image src={'/image/denahgbk.png'} width={600} height={200} className='w-full' alt='denahgbk' />
        </div>
      </div>
    </>
  )
}

export default NewsSections2