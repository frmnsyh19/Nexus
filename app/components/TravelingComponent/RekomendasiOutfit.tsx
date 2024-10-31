import Image from "next/image";
import React from "react";

const RekomendasiOutfit = () => {
  return (
    <>
      <div className=" w-full lg:mt-6 justify-center  items-center flex  flex-col">
        <div className="w-[90%] flex flex-col justify-start">
          <div className=" w-full p-1"></div>
          <div className=" mt-12 w-full lg:h-96 flex justify-center items-center">
            {/* <Image
              src={"/image/outfit.png"}
              width={950}
              height={300}
              alt="outfit"
            /> */}
            <img
              src="/image/outfit.png"
              className=" w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RekomendasiOutfit;
