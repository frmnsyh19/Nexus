import Image from "next/image";
import React from "react";

const NewsSections2 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-5 flex-col">
        <div className="w-full flex justify-center items-center lg:p-0 p-1">
          <div className=" w-full lg:w-[90%] flex flex-col p-2 lg:p-1 gap-2">
            {/* title */}
            <div className=" w-full flex flex-col">
              <div className=" w-full flex">
                <span className=" text-xl font-bold text-start uppercase">
                  Akses Jalan menuju hutan kota
                  gbk
                </span>
              </div>
            </div>
            {/* news */}
            <div className="w-full text-justify flex justify-start flex-col gap-3">
              <span className=" text-justify">
                Akses jalan untuk menuju Hutan
                kota GBK bisa menggunakan
                Trasnportasi umum dan kendaraan
                pribadi. Bagi pengunjung yang
                ingin menggunakan MRT kamu bisa
                turun di Stasiun Istora Mandiri,
                lalu jalan kaki melewati pintu 7
                GBK untuk menuju Hutan kota
              </span>
              <span className=" text-justify">
                Bagi pengunjung yang naik bus
                Transjakarta, kamu bisa turun di
                halte Gelora Bung Karno , lalu
                jalan sekitar 8 menit ke arah
                pintu 5 GBK sebelah halte Fx
                Sudirman untuk menuju Hutan kota.
                Dan bagi pengunjung yang membawa
                kendaraan pribadi , kamu bisa
                parkir kendaraan bermotor di area
                parkir terdekat yaitu Stadion
                Akuatik, Parkir selatan GBK.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center p-1 gap-2">
          <Image
            src={"/image/denahgbk.png"}
            width={600}
            height={200}
            className="w-full"
            alt="denahgbk"
          />
        </div>
      </div>
    </>
  );
};

export default NewsSections2;
