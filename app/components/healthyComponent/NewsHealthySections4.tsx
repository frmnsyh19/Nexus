import Image from 'next/image'
import React from 'react'
import { FiUser } from 'react-icons/fi'

export const NewsHealthySections4 = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-2 gap-2">
          <div className=' w-full flex-col flex justify-center items-center'>
            <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
              POLA HIDUP SEHAT DENGAN GYM
            </span>
            <div className="w-full flex gap-1 justify-center items-center p-1">
              <FiUser className=' text-base text-gray-400' />
              <span className=' text-gray-400 text-base capitalize'>
                Riffadhil ilham anggara - 2371510708
              </span>
            </div>
          </div>
          <span className=' text-justify leading-8'>
            Kesadaran masyarakat terhadap pentingnya pola hidup sehat semakin meningkat, dan berolahraga di
            ym menjadi salah satu tren yang kian populer. Banyak orang yang memanfaatkan gym sebagai sarana
            untuk mencapai kebugaran fisik dan mental. Salah satu kisah inspiratif datang dari Dominic Maulana, seorang pekerja di industri travel agency yang telah menemukan keseimbangan hidup melalui latihan di gym selama lima tahun terakhir. Dan
            inilah wawancara Saya Dengan Dominic pada Kamis, 17 Oktober Pukul 20;00 wib tentang perjalanan kebugaran Dominic: bagaimana ia berhasil mempertahankan rutinitas sehat di tengah-tengah tekanan pekerjaan.
          </span>
          <div className='w-full mt-5 flex-col gap-5  flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/newshealthy5.jpg' width={500} alt='header1' height={200} />
            </div>
            <span className=' text-justify leading-8 mt-3'>
              {`
                Bekerja selama enam tahun di industri travel agency bukanlah hal yang mudah bagi Dominic. Tekanan kerja yang tinggi, tuntutan untuk mencapai target, dan jam kerja yang panjang membuatnya merasa kewalahan. Stres yang menumpuk membuat Dominic mulai mencari cara untuk melepaskan tekanan tersebut, dan salah satu langkah yang diambil adalah memulai latihan di gym.
                "Ada seorang teman yang mengajak saya untuk mencoba berlatih di gym sebagai cara untuk meredakan stres," ungkap Dominic. "Awalnya, saya tidak terlalu yakin karena tidak memiliki pengalaman sebelumnya. Namun, saya pikir tidak ada salahnya untuk mencoba sesuatu yang baru." Dominic mulai datang ke gym dua hingga tiga kali seminggu, dengan fokus pada latihan dasar seperti treadmill dan angkat beban ringan. Latihan awalnya dilakukan secara perlahan-lahan agar tubuhnya bisa menyesuaikan diri. "
                Saya tidak memaksakan diri untuk langsung berlatih setiap hari atau melakukan latihan yang terlalu berat. Saya sadar, untuk mencapai hasil yang diinginkan, prosesnya harus bertahap," katanya.
              `}
            </span>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/gym1.png' width={500} alt='header1' height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
