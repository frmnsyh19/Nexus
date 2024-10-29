import Link from 'next/link'
import React from 'react'

const PostAbout = () => {
  return (
    <>
      <div className=' w-full p-5 flex bg-neutral mt-10 flex-col lg:flex-row justify-center gap-4 items-center'>
        <div className=' w-96  flex flex-col p-1'>
          <div className=' w-full h-'>
            <img src='/team/posts1.png' className=' w-full h-full'></img>
          </div>
          <div className=' w-full flex flex-col p-1 justify-start gap-3'>
            <span className=' text-white font-bold text-base'>
              HUTAN KOTA GBK : TEMPAT HEALING PARA GENZ
            </span>
            <span className=' text-sm text-white'>
              Hutan Kota GBK menjadi tempat healing alternatif ditengah kesibukan para Genz. Dibuat pada tahun 2018 dengan luas tanah 4,5 hektar,  Hutan Kota GBK menjadi ruang terbuka hijau di jakarta, pepohonan yang rindang beserta rumput hijau disekitar membuat udara segar di tengah kota, tempat ini biasa digunakan untuk bersantai bagi sebagian masyarakat terutama para Gen Z.
            </span>
            <Link href='/travel'><div className=' text-neutral p-2 w-28 text-sm rounded-xl bg-slate-50 cursor-pointer'>Read More</div></Link>
          </div>
        </div>
        <div className=' w-96  flex flex-col p-1'>
          <div className=' w-full'>
            <img src='/team/posts2.png' className=' w-full h-full'></img>
          </div>
          <div className=' w-full flex flex-col p-1 justify-start gap-3'>
            <span className=' text-white font-bold text-base'>
              KESEHATAN MENTAL BAGI KARYAWAN
            </span>
            <span className=' text-sm text-white'>
              10 Oktober setiap tahunnya, kita semua memperingati Hari Kesehatan Mental Sedunia. Tujuannya adalah untuk mempromosikan kesehatan mental secara global, meningkatkan kesadaran masyarakat akan masalah kesehatan mental,
              dan bekerja untuk membantu orang-orang yang berjuang dengan masalah kesehatan mental.
            </span>
            <Link href='/healthy'><div className=' cursor-pointer text-neutral p-2 w-28 text-sm rounded-xl bg-slate-50'>Read More</div></Link>
          </div>
        </div>
        <div className=' w-96   flex flex-col p-1'>
          <div className=' w-full h-48'>
            <img src='/team/posts3.png' className=' w-full h-full'></img>
          </div>
          <div className=' w-full flex flex-col p-1 justify-start gap-3'>
            <span className=' text-white font-bold text-base'>
              Ungkap Tren Masa Depan Teknologi Kecerdasan Buatan (AI) Di Indonesia
            </span>
            <span className=' text-sm text-white'>
              AI adalah singkatan dari Artificial Intelligence atau dalam bahasa Indonesia disebut Kecerdasan Buatan. Sederhananya, AI adalah teknologi yang memungkinkan komputer atau mesin untuk meniru kemampuan kognitif manusia, seperti belajar, berpikir, mengambil keputusan, dan bahkan berkreasi.
            </span>
            <Link href='/technology'><div className=' text-neutral p-2 w-28 text-sm rounded-xl bg-slate-50'>Read More</div></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostAbout