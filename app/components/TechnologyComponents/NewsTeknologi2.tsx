import Image from 'next/image'
import React from 'react'

export const NewsTeknologi2 = () => {
  return (
    <>
      <div className='w-full flex flex-col gap-3 p-2 justify-center items-center'>
        <div className=" w-full lg:w-[80%] flex justify-center ">
          <Image src={'/teknologi/headerteknologi4.png'} className=' w-full' height={500} width={700} alt='headerImage' />
        </div>
        <div className="w-full lg:w-[85%] flex justify-center items-center">
          {/* news */}
          <div className="w-full p-1 flex flex-col gap-4 text-justify">
            <span className=' text-justify leading-8'>
              Kita sama – sama berharap bahwa pemerintah Indonesia bisa menyadari begitu pentingnya AI dalam kehidupan manusia kedepan dan pemeritah juga bisa sesegera mungkin untuk membuat regulator ataupun regulasi yang pasti untuk pengembangan industry AI dan  pemerintah juga menyediakan dukungan yang jelas terkait AI seperti security yang makin pasti dan aman supaya rakya Indonesia tidak jadi korban.  ketika dukungan dari pemerintah itu full ada, dan berkat dukungan dari AI semoga masyarakat kedepannya akan lebih maju dan juga lebih bijak lagi dalam menggunakan AI. Secara global semoga AI tidak semenyeramkan itu  karena secara tidak langsung jika kita membicarakan secara global sangatlah luas, bahkan sangat menyeramkan salah satunya adalah yang ada di beberapa tahun kemarin yaitu Ai Robot sophia destroy humans yang katanya  dikabarkan akan menghSancurkan manusia.
            </span>
            <span className=' text-justify leading-8'>
              AI yang biasa kita kenal sebagai Kecerdasan buatan sangat berkembang begitu pesat dan memiliki potensi besar untuk mentransformasi berbagai sektor kehidupan masyarakat Indonesia baik itu pendidikan, kesehatan, ataupun dalam industri kreatif. Meski begitu tantangan seperti kurangnya infrastruktur dan regulasi yang jelas masih sangat banyak kita jumpai, ada juga banyak inovasi yang bermunculan dari startup lokal dan generasi muda berbakat. Kita berharap bahwa kedepanya AI juga akan membawa dampak perubahan di bidang tenaga kerja seiring dengan semakin banyaknya lapangan kerja dan peluang baru yang tercipta serta diperkenalkannya otomatisasi. Sektor pendidikan dan kesehatan diharapkan menjadi  bidang utama di mana AI dapat memberikan dampak positif yang paling signifikan, misalnya personalisasi pembelajaran dan diagnosis penyakit. Masa depan AI di Indonesia cukup menjanjikan, apabila dapat dukungan yang lebih besar dari pemerintah, akademisi, dan industri untuk menciptakan ekosistem yang memfasilitasi pengembangannya. Dengan bimbingan yang tepat, Indonesia bisa menjadi salah satu pemain AI terbaik di Asia.
            </span>
          </div>
        </div>
      </div >
    </>
  )
}
