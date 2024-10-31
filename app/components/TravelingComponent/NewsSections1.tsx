import Image from "next/image";
import React from "react";
import { FiUser } from "react-icons/fi";

const NewsSections1 = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 p-2 justify-center items-center">
        <div className=" w-full lg:w-[80%] flex justify-center ">
          <img
            src="/image/headertravel1.jpg"
            className=" w-full lg:h-96"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center lg:p-0 p-1">
          <div className=" w-full lg:w-[90%] flex flex-col p-1 gap-2">
            {/* title */}
            <div className=" w-full p-4 flex flex-col">
              <div className=" w-full flex justify-center items-center p-1">
                <span className=" text-xl font-bold text-center uppercase">
                  Hutan kota gbk, Tempat Healing
                  para genz
                </span>
              </div>
              <div className="w-full flex justify-center items-center p-1">
                <FiUser className=" text-base text-gray-400" />
                <span className=" text-gray-400 text-base capitalize">
                  Faqih lukman - 2371510187
                </span>
              </div>
            </div>
            {/* news */}
            <div className="w-full p-1 text-justify flex flex-col gap-4">
              <span className=" text-justify">
                Bosan dengan rutinitas yang
                monoton? Yuk ke Hutan kota Gbk,
                tempat ini bisa menjadi pilihan
                yang tepat untuk melepas rasa
                jenuh setelah menjalani aktivitas
                sehari-hari. Dengan beragam
                fasilitas yang tersedia,
                pengunjung dapat melakukan
                berbagai kegiatan menarik, seperti
                jogging, bersepeda, piknik, yoga,
                atau sekedar bersantai menikmati
                suasana alam.
              </span>
              <span className=" text-justify">
                Menurut penelitian, menghirup
                udara segar dan melakukan
                aktivitas di alam terbuka, dapat
                mengurangi stres, meningkatkan
                konsentrasi, dan memperkuat sistem
                kekebalan tubuh. Maka dari itu tak
                heran tempat ini seringkali
                menjadi wisata para kaum GenZ
                setelah melewati berbagai
                aktivitas sehari-harinya.
              </span>
              <span className=" text-justify">
                Hutan Kota GBK menjadi tempat
                healing alternatif ditengah
                kesibukan para Genz. Dibuat pada
                tahun 2018 dengan luas tanah 4,5
                hektar, Hutan Kota GBK menjadi
                ruang terbuka hijau di jakarta,
                pepohonan yang rindang beserta
                rumput hijau disekitar membuat
                udara segar di tengah kota, tempat
                ini biasa digunakan untuk
                bersantai bagi sebagian masyarakat
                terutama para GenZ setelah
                melewati berbagai aktivitasnya,
                juga terdapat Jogging track dan
                Spot foto instagramable yang
                tentunya menjadi daya tarik
                pengunjung. Selain itu dengan
                pemandangan nya yang indah Hutan
                Kota GBK juga sering diadakan
                acara kenegaraan hingga festival
                musik. Berbagai acara di Hutan
                Kota GBK
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-3 p-2 justify-center items-center">
        <div className="w-full p-1 lg:w-[80%] flex-col gap-4 flex justify-center items-center">
          <div className=" w-full flex justify-center gap-2 items-center flex-col">
            <span className=" lg:text-center uppercase text-base lg:text-lg font-bold ">
              Berbagai acara di Hutan Kota GBK:
            </span>
            <p className=" text-lg font-bold text-center">
              Gala Dinner KTT Ke-43 Asean 2023
            </p>
          </div>
          <div className=" w-full flex justify-center items-center">
            <Image
              src="/image/kttnew.jpg"
              width={200}
              height={200}
              alt="ktt image"
            />
          </div>
          <div className=" w-full p-1 text-justify flex flex-col gap-4">
            <span className=" text-justify">
              Acara kenegaraan yang menyambut para
              pemimpin negara ASEAN, dan
              organisasi internasional serta tamu
              undangan lainnya dalam Gala Dinner
              Konferensi Tingkat Tinggi (KTT)
              ke-43 ASEAN. Makan malam yang
              diselenggarakan dengan hangat di
              Hutan Kota Gelora Bung Karno
              (GBK),Jakarta, Rabu (06/09/2023).
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 lg:p-3 justify-center items-center">
        <div className=" w-full p-2 lg:w-[80%] flex justify-start lg:gap-7 flex-col">
          <div className=" w-full flex justify-center gap-5 items-center flex-col">
            <div className=" w-full lg:w-2/5 text-center">
              <span className=" text-lg font-bold text-center capitalize">
                Festival Musik SMOOTH SESSION 2022
                yang Digelar di Hutan Kota GBK,
                Senayan
              </span>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center p-1">
            <img
              src="/image/festivalmusik.jpg"
              className=" w-80"
              alt=""
            />
          </div>
          <div className="w-full p-1 text-justify flex flex-col gap-4">
            GUINNESS bersama Plainsong dan
            didukung RUX menggelar festival musik
            dan makanan SMOOTH SESSION di Hutan
            Kota GBK, Senayan. Lebih dari 20
            musisi dari berbagai genre musik
            seperti pop, rock, juga metal, tampil
            di 2 panggung musik SMOOTH SESSION.
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSections1;
