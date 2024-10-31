import Image from "next/image";
import React from "react";

export const FasilitasGbk = () => {
  return (
    <>
      <div className="w-full mt-3 flex justify-center bg-neutral items-center">
        <div className="w-[90%] flex justify-start gap-3 flex-col p-2">
          <div className=" w-full p-1 flex flex-col gap-3">
            <span className=" text-start text-lg text-slate-50">
              Fasilitas
            </span>
            <span className="text-justify text-slate-50">
              terdapat berbagai fasilitas yang
              disediakan oleh pengelola demi
              kenyamanan pengunjung yaitu :
            </span>
          </div>
          <div className=" w-full flex justify-center gap-3 items-center flex-col p-1">
            <div className="w-full lg:flex-row flex-col flex justify-center gap-3 items-center p-2">
              <div className=" w-full lg:w-2/6  justify-center items-center gap-2 flex flex-col">
                <Image
                  width={200}
                  src={"/image/gbk2.png"}
                  className=" w-full"
                  height={200}
                  alt=""
                />
                <div className=" badge text-white text-sm lg:text-base bg-rose-500 text-center border-none p-2">
                  Joging Track
                </div>
              </div>
              <div className=" w-full lg:w-2/6  justify-center items-center gap-2 flex flex-col">
                <Image
                  width={200}
                  src={"/image/gbk4.png"}
                  className=" w-full"
                  height={200}
                  alt=""
                />
                <div className=" badge text-white text-sm lg:text-base bg-rose-500 text-center border-none p-2">
                  Bangku Taman Gbk
                </div>
              </div>
              <div className=" w-full lg:w-2/6  justify-center items-center gap-2 flex flex-col">
                <Image
                  width={200}
                  src={"/image/gbk3.png"}
                  className=" w-full"
                  height={200}
                  alt=""
                />
                <div className=" badge text-white text-sm lg:text-base bg-rose-500 text-center border-none p-2">
                  Mushola Dan Toilet
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-1">
              <div className=" w-full gap-2 flex-col flex justify-center items-center lg:w-3/6">
                <img
                  src="/image/gbk1.png"
                  className=" w-full h-40 lg:h-72"
                  alt=""
                />
                <div className=" badge text-white text-sm lg:text-base bg-rose-500 text-center border-none p-2">
                  Food Court
                </div>
              </div>
              <div className=" w-full flex gap-2 flex-col justify-center items-center lg:w-3/6">
                <img
                  src="/image/kolamikan.jpg"
                  className=" w-full h-40 lg:h-72"
                  alt=""
                />
                <div className=" badge text-white text-sm lg:text-base bg-rose-500 text-center border-none p-2">
                  Kolam Ikan
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <span className=" text-justify text-white leading-8">
              Terdapat juga food court yang
              disediakan bagi para pengunjung yang
              ingin membeli makan di depan pintu
              masuk Hutan Kota GBK, Sedangkan
              pengunjung yang ingin piknik
              diperbolehkan untuk membawa alas
              tikar dan makanan sendiri.
            </span>
            <div className="w-full flex flex-col">
              <span className=" text-xl text-white font-bold">
                Jam Operasional Hutan Kota GBK
              </span>
              <span className=" text-base text-white">
                Hutan Kota GBK dapat dikunjungi
                mulai hari Selasa-Minggu dengan 2
                sesi jam buka.
              </span>
              <span className=" text-base text-white">
                Hutan Kota GBK dapat dikunjungi
                mulai hari Selasa-Minggu dengan 2
                sesi jam buka.
              </span>
              Sesi pagi dibuka pada pukul:
              06.00-10.00 WIB <br />
              Sore dibuka pada pukul : 15.00-18.00
              WIB
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
