import Image from 'next/image'
import React from 'react'
import { FiUser } from 'react-icons/fi'
export const NewsHealthySections2 = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-3 gap-2">
          <section id='basket'>
            <div className=' w-full flex-col flex justify-center items-center'>
              <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
                SEBERAPA EFEKTIF WORKOUT DALAM BASKET?
              </span>
              <div className="w-full flex gap-1 justify-center items-center p-1">
                <FiUser className=' text-base text-gray-400' />
                <span className=' text-gray-400 text-base capitalize'>
                  Sandy Syahadi - 2371510716
                </span>
              </div>
            </div>
          </section>
          <span className=' text-justify leading-8'>
            Saat ini olahraga basket dan aktivitas di gym semakin diminati oleh masyarakat, terutama
            generasi muda yang ingin menjaga kesehatan dan kebugaran tubuh. Kombinasi antara  latihan
            fisik dan kompetisi dalam basket membuatnya populer, sementara gym menawarkan  berbagai pilihan
            latihan kekuatan dan kebugaran. Basket membutuhkan kelincahan, kekuatan, dan stamina. Latihan di
            gym membantu pemain  meningkatkan daya tahan otot, kekuatan tubuh bagian atas dan bawah, serta kemampuan  loncatan. Dengan latihan angkat beban dan kardio yang konsisten, pemain basket bisa  bermain lebih lama dan mengurangi risiko cedera. Menggabungkan latihan basket dengan latihan di gym menjadi tren di kalangan atlet,  terutama mereka yang ingin meningkatkan performa fisik dan daya tahan.
            Banyak pelatih  merekomendasikan kombinasi ini untuk membantu pemain basket lebih kuat dan gesit di  lapangan.
          </span>
          <div className='w-full mt-5 flex-col gap-5 p-1 flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/newshealthy3.jpg' width={500} alt='header1' height={200} />
            </div>
            <span className=' text-justify leading-8 mt-3'>
              Dan inilah wawancara saya, pada hari sabtu 19 oktober 2024,
              terutama pukul 07.00PM. Rendy atau Khoko berkesempatan untuk menjadi
              narasumber pada berita kali ini, Rendy  adalah seorang mantan obesitas yang
              beratnya hampir 120kg lulusan mercu buana tahun 2018. dengan dirinya tersebut ia
              merasa tidak percaya diri untuk berinteraksi didepan umum  dan akhirnya menimbulkan
              sifat introvert. dengan itu, ia memutuskan untuk menjalani pola  hidup yang sehat dengan
              berolahraga basket dan fitness. Basket menjadi hobbynya sejak  SMA sewaktu ia masih obesitas
              dan berlanjut ke masa kuliah. Tepat kuliah semester 2,ia  mulai hidup sehat dengan menjalankan program diet dan berolahraga.  Rendy menyatakan bahwa workout khususnya Fitnes sangat penting untuk olah raga basket, karna olahraga basket termasuk olahraga body contack. Otot tubuh sangat digunakan dalam  permainan bola basket, sehingga kekuatan dan kesehatannya harus tetap dijaga. Otot tubuh  yang tidak dalam kondisi fit akan membuat pemain bermain tidak maksimal. Supaya  kesehatan dan kekuatan otot tubuh tetap terjaga, pemain bola basket harus melakukan latihan  secara rutin .
            </span>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/newshealthy6.jpg' width={500} alt='header1' height={200} />
            </div>
            <span className='text-justify leading-8 '>
              Makan makanan yang sehat dan menjaga pola tidur yang cukup sangat
              penting untuk  menjaga keseimbangan tubuh dan kesehatan secara
              keseluruhan. Makanan yang sehat,  terutama yang kaya akan protein,
              protein membantu dalam perbaikan dan pembentukan otot yang
              dibutuhkan selama latihan. Tidur yang cukup sangat penting karena
              selama tidur, tubuh  melakukan proses pemulihan, termasuk memperbaiki jaringan otot yang rusak akibat latihan.
              Rendy menegaskan untuk orang yang baru mulai terutama gen z yang ingin mulai gym,  penting untuk fokus pada tujuan pribadi dan konsisten, bukan hanya ikut-ikutan (FOMO) dan  ikut trend saja. Workout di gym telah terbukti sangat efektif dalam meningkatkan performa atlet basket.  Melalui program latihan yang terstruktur, atlet dapat meningkatkan kekuatan, daya tahan, dan  fleksibilitas, yang semuanya penting dalam permainan basket. Latihan beban dan latihan  fungsional membantu memperkuat otot-otot yang digunakan saat dribble, tembakan, dan  pertahanan. Selain itu, kebugaran kardio yang diperoleh dari workout gym meningkatkan  stamina, memungkinkan pemain untuk bertahan lebih lama di lapangan.Namun,  efektivitasnya sangat tergantung pada jenis latihan yang dilakukan dan keteraturan program.  Kombinasi latihan fisik di gym dengan praktik teknik bermain basket di lapangan akan  memberikan hasil yang optimal
            </span>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/newshealthy4.jpg' width={500} alt='header1' height={200} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
