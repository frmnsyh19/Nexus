import Image from 'next/image'
import React from 'react'
import { FiUser } from 'react-icons/fi'

export const NewsHealthySections1 = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-2 gap-2">
          <div className=' w-full flex-col flex justify-center items-center'>
            <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
              Kesahatan Mental Bagi Karyawan</span>
            <div className="w-full flex gap-1 justify-center items-center p-1">
              <FiUser className=' text-base text-gray-400' />
              <span className=' text-gray-400 text-base capitalize'>
                Pamela Ribka - 2271510436
              </span>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <span className=' text-justify leading-8'>
              10 Oktober setiap tahunnya, kita semua memperingati Hari Kesehatan Mental Sedunia.
              Tujuannya adalah untuk mempromosikan kesehatan mental secara global, meningkatkan
              kesadaran masyarakat akan masalah kesehatan mental, dan bekerja untuk membantu
              orang-orang yang berjuang dengan masalah kesehatan mental. Situs web WHO menyatakan
              bahwa “Kesehatan Mental di Tempat Kerja” akan menjadi tema Hari Kesehatan Mental
              Sedunia pada tahun 2024. Berkolaborasi dengan beberapa pihak, WHO ingin menekankan
              hubungan penting antara kesehatan mental dan pekerjaan pada Hari Kesehatan Mental
              Sedunia ini. Kesehatan mental dapat dilindungi oleh lingkungan kerja yang aman dan
              sehat. Di sisi lain, lingkungan kerja yang tidak kondusif dapat menurunkan
              produktivitas, kepuasan kerja, dan kesehatan mental. Menyoroti hal tersebut,
              reporter Nexus Insight mewawancarai Desi Anggraeni, seorang ilmuwan psikologi
              serta HRD di Perusahaan konsultan di Kawasan Kuningan, Jakarta Selatan terkait dengan
              Kesehatan mental bagi karyawan. Menurut Desi, untuk terhindar dari stress akibat
              tekanan dalam kantor atau sosial, seseorang harus bisa menyeimbangkan antara
              pekerjaan dengan kehidupan pribadi. Maka untuk memaksimalkan produktivitas serta
              efisiensi dalam bekerja dibutuhkan langkah-langkah penting terlebih dahulu. Mulai dari menata atau merapikan tempat kerja sehingga mood untuk bekerja lebih baik, membangun hubungan yang baik dengan sesama teman kantor, menyikapi suatu permasalahn dengan tidak panik, serta bekerja tidak melebihi porsi.
            </span>
          </div>
          <div className='w-full mt-5 flex-col gap-5  flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/newshealthy1.jpg' width={450} alt='header1' height={200} />
            </div>
            <span className=' text-justify leading-8'>
              Seseorang harus aware terhadap apa yang mereka sendiri rasakan, beberapa tanda bahwa seseorang memiliki masalah Kesehatan mental yang dapat terlihat dari diri sendiri atau bahkan orang sekitar adalah seperti merasa Lelah terhadap apapun, walaupun hanya duduk seharian, gangguan tidur dan gangguan makan.
            </span>
            <span className=' text-justify leading-8'>
              “Ada istilah mengatakan di dalam tubuh yang sehat terdapat jiwa yang kuat, semua itu pasti bermula dari jiwa, ketika jiwanya sehat gitu kan tentunya fisiknya juga akan sehat.” Desi (18/10).
              Banyak stigma buruk mengenai Kesehatan mental seperti jika ke psikolog berarti sakit jiwa, atau kurangnya beribadah sehingga mengakibatkan terganggunya mental, atau bahkan self-diagnosed yang dilakukan melalui penelusuran sosial media atau google sangat mempengaruhi Kesehatan setiap orang. kurangnya edukasi akan kesehatan mental menjadikan seseorang mudah untuk berspekulasi negatif terhadap kesehatan mental mereka sendiri Dimana seharusnya lingkungan sekitar lah yang mendukung orang-orang di sekitarnya namun justru yang memberikan dampak atau memperburuk keadaan mental seseorang. Berbicara dengan orang yang dipercaya atau memberikan ruang untuk diri sendiri di tengah jengahnya kehidupan, adalah salah satu cara untuk melepaskan stress, “Ketika merasa memang kita sudah tidak mampu untuk menghadapi diri kita untuk ketika bertemu teman itu enggak ada solusinya langkah selanjutnya adalah datang ke pihak professional.” Ucap Desi (18/10).
              Karyawan dan perwakilan mereka, serta mereka yang memiliki pengalaman pribadi dengan masalah kesehatan mental, harus dilibatkan dalam setiap upaya untuk mengatasi kesehatan mental di tempat kerja. Untuk masa depan yang sehat, mari kita ambil tindakan sekarang untuk menjamin bahwa setiap orang memiliki kesempatan untuk sukses dalam karier dan kehidupan pribadi mereka.
            </span>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/newshealthy2.jpg' width={450} alt='header1' height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
