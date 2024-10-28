import Image from 'next/image'
import React from 'react'

export const NewsHealthySections6 = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-3 items-center">
        <div className=" w-full lg:w-[85%] flex flex-col p-2 gap-2">
          <div className=' w-full flex-col flex justify-center items-center'>
            <span className=' text-center text-2xl uppercase font-bold flex w-full justify-center'>
              TANTANGAN DI AWAL PERJALANAN
            </span>

          </div>
          <span className=' text-justify leading-8'>
            {`Seperti kebanyakan orang yang baru mulai berolahraga, Dominic juga menghadapi berbagai tantangan di awal perjalanan kebugarannya. Salah satu kesulitan yang dihadapinya adalah rasa sakit otot setelah latihan pertama kali. "Badan saya terasa sakit selama beberapa hari, dan sempat membuat saya merasa enggan untuk kembali ke gym. Namun, saya tahu bahwa rasa sakit ini adalah bagian dari proses adaptasi tubuh," ungkapnya.
              Selain itu, rasa minder juga sempat menghampirinya. "Saya merasa sedikit minder saat melihat orang-orang lain di gym yang sudah lebih berpengalaman dan memiliki tubuh yang lebih terlatih. Namun, saya mencoba untuk tidak membandingkan diri dengan orang lain dan fokus pada tujuan pribadi saya," ujar Dominic.
              Ia kemudian menetapkan tujuan kecil untuk dirinya sendiri, seperti meningkatkan beban latihan atau menambah durasi latihan. "Dengan menetapkan tujuan yang bisa dicapai, saya merasa lebih termotivasi untuk terus berlatih," tambahnya.` }
          </span>
          <div className='w-full mt-5 flex-col gap-5  flex justify-center items-center'>
            <div className='w-full lg:w-[80%] flex justify-center items-center'>
              <Image src='/healthy/gym4.png' width={500} alt='header1' height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
