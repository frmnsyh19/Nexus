import Image from 'next/image'
import React from 'react'
import { FiUser } from 'react-icons/fi'
export const NewsSections3 = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center mt-20'>
        <div className=" w-[90%] flex flex-col justify-center gap-2  items-center">
          <div className=' w-[60%] flex p-1 flex-col justify-center'>
            <span className='text-center text-2xl font-bold'>
              YUSTRIANA APRILIANTI MAHASISWI UNIVERSITAS BUDI LUHUR, PERAIH MENDALI PON 2024
            </span>
            <div className="w-full flex justify-center gap-1 items-center p-1">
              <FiUser className=' text-base text-gray-400' />
              <span className=' text-gray-400 text-base capitalize'>
                Kemal Muhammad fasya - 2371510039
              </span>
            </div>
          </div>
          <div className="w-full p-2 text-justify">
            Yustirani Aprilianti, seorang mahasiswi Universitas Budi Luhur, telah mencatatkan
            prestasi yang gemilang sebagai peraih mendali emas dan perunggu di Pekan Olahraga Nasional (PON)
            2024. Dalam wawancara ini, Yustriani Aprilianti membagikan pengamalan pertama dia selama
            berpatisipasi dalam edisi PON kali ini. Diawali dengan bergabungnya ia dengan Unit Kegiatan
            Mahasiswa (UKM) pencinta alam Makopala di Universitas Budi Luhur. Sebelumnya, ia merupakan
            atlit basket ketika semasa SMP dan SMK, namun ia merasa tidak berkembang ketika menjalanin
            menjadi atlit basket. Hingga akhirnya ia terlibat dalam kegiatan pencinta alam membawanya menuju kepada pengalaman baru dan memberikan kesempatan untuk mengeskpolarasi lebih jauh. Selama sekitar 3-4 Tahun, Yustriana telah aktif  dalam kegiatan pencita alam. Awalnya ia tidak memiliki pengalaman dalam olahraga Arung jeram melainkan ia aktif dalam olahraga panjat tebing, namu dengan adanya dorongan keluarga dan teman-teman nya, akhirnya ia mengikuti seleksi dan ia berhasil bergabung dengan Federasi DKI Jakarta untuk persiapan PON 2024. Motivasi utama Yustriana dalam berpatisipasi dalam edisi PON 2024 ialah keinginan dia untuk mendapat beasiswa karena ia merasa bahwa dirinya tidak lebih baik dari kedua kakaknya yang pintar secara akademis, dan ia juga ingin
            membiayai kuliahnya sendiri maka dari itu Yusriana sangat semangat untuk bisa berpartisipasi dalam PON edisi kali ini.
          </div>
          <div className=' mt-2 w-full p-3 flex justify-center h-80'>
            <Image src={'/image/newstraveling2.png'} alt='' width={800} height={100} />
          </div>
          <div className="w-full p-2 text-justify">
            Yustriana Apriliana yang biasa di panggil “BENGAL” sangat merasa bangga ketika ia
            mendapatkan mendali Emas dan Perunggu pada edisi PON kali ini, terutama karena ini
            menjadi pengalaman perdananya mengikut berpatisipasi dalam PON. Selama PON, Yustriana
            yang akrab diapanggil “BENGAL” merasakan banyak tantangan yang harus ia hadapi,
            salah satunya tantang terberatnya adalah  cara mengatur waktu antara kliah dan latihan.
            Lawan yang dihadapi terutama Jawa Barat dan Jawa Tengah sangat kuat dikarekana kedua
            provinsi ini sudah lama terjun dalam cabor arung jeram, sedangkan DKI Jakarta baru saja
            2 tahun, tetapi Yustirana dan timnya berhasil membawa pulang mendali yang sangat di
            dambakan. Dukugan Keluarga, Kampus dan teman-temannya sangat berperan dalam kesuksesannya.
            Orang tuanya ia sangant mendukung penuh perjuangan Yustriana, meski diwalanya mereka sedikit
            khawatir karena Yustriana bukan atlet dari awalnya, orang tuanya memberikan kesempatan untuk Yustirana menemukan jalannya sendiri. Setelah mendapatakan mendali pada PON, Yustriana berencana untuk mengikuti pertandingan di sungai Progo, Yogyakarta skala Asia Pasifik dan dibulan Mei ada pertandingan di New Zeland, ia berharap dapat segera menyelesaikan kuliah. Ia juga ingin menyeimbangkan antar studi dan olahraga, sehingga dapat mencapai target yang diinginkannya. Yustriana menenkankan petingnya motivasi yang datang dalam diri sendiri. Ia percaya bahwa kesuksesan tidak datang dengan mudah, dan untuk setiap atlet harus terus berlatih dan tidak cepat merasa puas dengan pencapaianya yang telah diraih karena masih banyak perjalanan yang terjang dan berliku. Perjalanan Yustriana Aprilianti menunjukan bahwa dengan tekad dan dukungan yang kuat, siapa pun dapat meraih impian dan jalam mereka sendiri. Semangatnya untuk terus berlajar dan berprestasi, dapat dimenjadi inspirasi bagi calon altlit yang ingin mengikuti jejaknya.

          </div>
        </div>
      </div>
    </>
  )
}
