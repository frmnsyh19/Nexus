import Image from 'next/image'
import React from 'react'

export const NewsHealthySections5 = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-2 gap-2">
          <div className=' w-full flex-col flex justify-center items-center'>
            <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
              DARI RUTIN MENJADI GAYA HIDUP
            </span>

          </div>
          <span className=' text-justify leading-8'>
            {`Seiring berjalannya waktu, Dominic merasakan banyak manfaat dari latihan fisik yang rutin. Kebugaran fisiknya meningkat, dan ia mulai merasa lebih berenergi. Selain itu, efek positif juga terasa pada kesehatan mentalnya. "Latihan di gym membuat beban pikiran terasa berkurang. Saya merasa lebih tenang dan bisa berpikir lebih jernih setelah berolahraga," kata Dominic.
            Motivasi tersebut membuatnya semakin tertarik untuk meningkatkan intensitas dan frekuensi latihannya. Setelah beberapa bulan, Dominic mulai berlatih lima hingga enam kali seminggu, dengan program latihan yang lebih terstruktur. "Saya mencoba untuk menggabungkan latihan kekuatan, kardio, dan mobilitas dalam satu minggu. Dengan cara ini, tubuh saya tetap seimbang dan tidak cepat merasa jenuh," jelasnya. Kini, setelah lima tahun
            konsisten, gym bukan lagi sekadar aktivitas fisik bagi Dominic, melainkan sebuah gaya hidup yang tidak terpisahkan dari kesehariannya.` }
          </span>
          <div className='w-full mt-5 flex-col gap-5  flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/gym2.png' width={500} alt='header1' height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
