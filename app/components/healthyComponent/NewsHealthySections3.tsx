import Image from 'next/image'
import React from 'react'
import { FiUser } from 'react-icons/fi'

export const NewsHealthySections3 = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-2 gap-2">
          <div className=' w-full flex-col flex justify-center items-center'>
            <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
              CARA EFEKTIF MEMBENTUK TUBUH IDEAL DENGAN POLA MAKAN DAN OLAHRAGA YANG TEPAT
            </span>
            <div className="w-full flex gap-1 justify-center items-center p-1">
              <FiUser className=' text-base text-gray-400' />
              <span className=' text-gray-400 text-base capitalize'>
                Ica Pratiwi Amran - 2371510963
              </span>
            </div>
          </div>

          <span className=' text-justify leading-8'>
            Menjaga pola makan dan berolahraga secara teratur adalah dua kunci penting untuk
            menurunkan berat badan. Namun, tidak sedikit orang yang memilih untuk mengurangi porsi makan atau tidak makan sama sekali dan memperbanyak
            berolahraga agar dapat menurunkan berat badan secara signifikan. standarisasi
            kecantikan dikehidupan sosial masyarakat khususnya di indonesia mendorong setiap
            orang untuk menjaga pola makan agar mendapatkan tubuh yang ideal. Ini bertujuan untuk mengetahui bagaimana mendaptkan tubuh yang ideal dengan cara yang efektif dan berkualitas. setiap perempuan menginginkan berat badan ideal. Rahasianya, yaitu dengan mengatur asupan makanan dan rutin berolahraga. Agar hasilnya maksimal, kita bisa memilih olahraga tertentu untuk mencapai body goals. Dan ini lah kutipan wawancara saya pada Sabtu 19 Oktober 2024, Tepat nya pada pukul 19.00 malam. Saya datang ke tempat tinggal narasumber saya, Kesan pertama yang saya dapatkan pada saat datang ke tempat tinggal nya adalah begitu nyaman dan tenang. Saya langsung bertemu dengan Aura dan meminta izin mewawancarainya.
          </span>
          <div className='w-full mt-5 flex-col gap-5  flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/joging.png' width={500} alt='header1' height={200} />
            </div>
            <span className=' text-justify leading-8 mt-3'>
              Aura adalah seorang anak muda yang sangat menjaga kesehatan dan sangat menyukai olahraga.
              Dengan lulusan s1 ilmu komunikasi. Ia sangat aktif dalam kegiatan outdor dan sangat peduli dengan Kesehatan untuk menjaga tubuh tetap ideal. Menurut aura menjaga kesehatan sangat penting untuk anak muda dan orang dewasa, terutama untuk perempuan yang ingin terlihat lebih percaya diri dengan membentuk tubuh yang ideal. Bukan untuk flexsing atau mencari pengakuan,
              Melaikan untuk kesehatan dan vibes yang lebih positif. Aura menyatakan bahwa Pola makan seimbang
              adalah kunci untuk mendapatkan semua nutrisi yang dibutuhkan tubuh, mulai dari karbohidrat,
              protein, lemak sehat, hingga vitamin dan mineral. Makan dengan seimbang membantu menjaga
              keseimbangan energi, memastikan kita mendapatkan cukup kalori untuk beraktivitas tanpa kelebihan
              yang bisa menyebabkan penambahan berat badan. Tubuh yang ideal bukan hanya hasil dari olahraga dan pola makan, tetapi juga dari istirahat yang cukup. Istirahat yang cukup merupakan fondasi bagi tubuh yang sehat. Dengan istirahat yang cukup, Anda akan memiliki lebih banyak energi, konsentrasi yang lebih baik, dan mood yang lebih positif. Untuk mencapai tubuh ideal, perlu diingat bahwa tidak ada jalan pintas. Kombinasi antara mengonsumsi makanan bergizi, seperti buah-buahan, sayuran, protein, dan karbohidrat kompleks, serta melakukan olahraga secara teratur, baik kardio maupun kekuatan, adalah kunci utama. Selain itu, istirahat
              yang cukup dan manajemen stres juga berperan penting dalam proses pembentukan tubuh ideal.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
