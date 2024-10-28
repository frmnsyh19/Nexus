import Image from 'next/image'
import React from 'react'

export const NewsHealthySections7 = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-2 gap-2">
          <div className=' w-full flex-col flex justify-center items-center'>
            <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
              MANFAAT YANG DIRASAKAN : LEBIH DARI SEKEDAR KEBUGARAN FISIK
            </span>
          </div>
          <span className=' text-justify leading-8'>
            {`Setelah lima tahun berlatih secara rutin, Dominic merasakan banyak perubahan positif, tidak hanya pada fisiknya, tetapi juga mentalnya. Dari segi fisik, Dominic mengaku tubuhnya menjadi lebih kuat, postur tubuh membaik, dan ia jarang mengalami masalah kesehatan seperti sakit punggung. "Dulu saya sering mengalami sakit punggung karena duduk terlalu lama di kantor, tetapi setelah rajin berolahraga, masalah tersebut hampir tidak pernah muncul lagi," ujarnya.
            Sedangkan dari segi mental, gym menjadi tempat di mana ia bisa meredakan stres dan melupakan sejenak semua masalah pekerjaan. "Ketika saya berlatih, saya merasa seperti semua beban di pikiran hilang. Endorfin yang dilepaskan saat berolahraga benar-benar membuat suasana hati saya lebih baik," kata Dominic.
            Selain itu, latihan fisik juga mengajarkan disiplin dan konsistensi, dua hal yang menurut Dominic sangat penting dalam kehidupan sehari-hari. "Gym membantu saya untuk membangun pola pikir yang lebih positif dan meningkatkan kemampuan saya dalam menetapkan tujuan dan mencapainya," tambahnya.`}
          </span>
          <div className='w-full mt-5 flex-col gap-5  flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/gym5.png' width={500} alt='header1' height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
