import React from "react";
import { FeatureComponent } from "./FeatureComponent";
import "../style.css";
import {
  FiCalendar,
  FiUser,
} from "react-icons/fi";
export const HeaderOne = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start gap-2">
        <div className=" w-full flex flex-col lg:flex-row justify-evenly lg:gap-2 gap-1 items-center lg:p-3">
          {/* 1 */}
          <div
            className=" w-full lg:w-[30rem] h-56 lg:h-60"
            id="bgheaderone-1">
            <div className=" w-full h-full flex flex-col justify-end items-center p-2">
              <div className=" w-64  gap-4 flex flex-col justify-center items-center">
                <div className=" hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase">
                  News
                </div>
                <span className=" text-sm lg:text-base text-white font-semibold uppercase text-center">
                  seberapa efektif workout dalam
                  basket
                </span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className=" w-full lg:w-[30rem] h-56 lg:h-60"
            id="bgheaderone-2">
            <div className=" w-full h-full flex flex-col justify-end items-center p-2">
              <div className=" w-80 gap-4 flex flex-col justify-center items-center">
                <div className=" hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase">
                  News
                </div>
                <span className=" text-sm lg:text-base font text-white font-semibold uppercase text-center">
                  cara membentuk tubuh ideal
                  dengan pola makan dan olahraga
                  yang tepat
                </span>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            className=" w-full lg:w-[30rem] h-56 lg:h-60"
            id="bgheaderone-3">
            <div className=" w-full h-full flex flex-col justify-end items-center p-2">
              <div className=" w-80 gap-4 flex flex-col justify-center items-center">
                <div className=" hover:bg-orange-600 btn btn-sm border-none font-light bg-orange-600 text-white uppercase">
                  News
                </div>
                <span className=" font-semibold text-base text-white font-sem uppercase text-center"></span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex lg:p-0 p-1 justify-center items-center">
          <div className=" w-full lg:w-[88%] flex flex-row  h-28">
            <div className=" w-3/5 lg:w-1/2 h-full bg-slate-200 flex justify-between items-center p-1 lg:p-4">
              <span className=" text-indigo-800 font-bold text-sm lg:text-2xl">
                Modern Technology Fast Here
              </span>
              <button className=" btn btn-sm rounded-2xl text-sm bg-red-500 text-white capitalize font-semibold">
                see details
              </button>
            </div>
            <div
              className=" w-2/5 lg:w-1/2 h-full flex justify-center items-center"
              id="benner1"></div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center lg:mt-4">
          <div className=" w-full lg:w-[75%] lg:flex-row flex-col flex justify-evenly gap-5 p-2">
            <div className=" w-full lg:w-[45rem] flex flex-col gap-4 justify-start p-3">
              <div className=" w-full flex flex-col justify-start gap-2">
                <p className=" text-lg text-indigo-900 capitalize font-bold">
                  Recent Posts
                </p>
                <div className=" flex flex-row w-full gap-2">
                  <div className=" bg-orange-600 p-1 w-8"></div>
                  <div className=" w-full border-t-2 border-b-2"></div>
                </div>
              </div>
              <div className=" w-full flex flex-col justify-center items-center gap-3">
                <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-3">
                  <div
                    className=" w-full lg:w-52  h-52 lg:h-52"
                    id="posts1">
                    <div className=" w-full h-full flex flex-col justify-end items-start">
                      <div className="w-full p-2 flex flex-col gap-2 justify-start items-start">
                        <div className="p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500">
                          MARKET
                        </div>
                        <span className=" text-white font-bold">
                          The Game changing ar
                          roadeily breakfast
                        </span>
                        <div className=" w-full p-1 flex gap-1 text-gray-400 text-sm  items-center">
                          <FiCalendar />
                          <span>
                            27 AUGUST 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" w-full lg:w-52 h-52 lg:h-52"
                    id="posts2">
                    <div className=" w-full h-full flex flex-col justify-end items-start">
                      <div className="w-full p-2 flex flex-col gap-2 justify-start items-start">
                        <div className="p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500">
                          MARKET
                        </div>
                        <span className=" text-white font-bold">
                          The Game changing ar
                          roadeily breakfast
                        </span>
                        <div className=" w-full p-1 flex gap-1 text-gray-400 text-sm  items-center">
                          <FiCalendar />
                          <span>
                            27 AUGUST 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" w-full lg:w-52  h-52 lg:h-52"
                    id="posts3">
                    <div className=" w-full h-full flex flex-col justify-end items-start">
                      <div className="w-full p-2 flex flex-col gap-2 justify-start items-start">
                        <div className="p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500">
                          MARKET
                        </div>
                        <span className=" text-white font-bold">
                          The Game changing ar
                          roadeily breakfast
                        </span>
                        <div className=" w-full p-1 flex gap-1 text-gray-400 text-sm  items-center">
                          <FiCalendar />
                          <span>
                            27 AUGUST 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex lg:flex-row flex-col  lg:justify-center items-center gap-2">
                  <div
                    className=" w-full lg:w-[50%]  h-48"
                    id="posts4">
                    <div className=" w-full h-full flex flex-col justify-end items-start">
                      <div className="w-full p-2 flex flex-col gap-2 justify-start items-start">
                        <div className="p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500">
                          NEWS
                        </div>
                        <span className=" text-white font-bold">
                          Racing Games Browned
                          Butte roadert Cookies
                          Daily Breakfast
                        </span>
                        <div className=" w-full p-1 flex gap-2 text-gray-400 flex-row">
                          <div className="flex flex-row gap-1 items-center text-xxs text-gray-400">
                            <FiCalendar />
                            <span>
                              27 AUGUST 2024
                            </span>
                          </div>
                          <div className=" flex flex-row gap-1 items-center text-xxs text-gray-400">
                            <FiUser />
                            <span>
                              27 AUGUST 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" w-full lg:w-[50%]  h-48"
                    id="posts5">
                    <div className=" w-full h-full flex flex-col justify-end items-start">
                      <div className="w-full p-2 flex flex-col gap-2 justify-start items-start">
                        <div className="p-2 text-sm opacity-70 rounded-lg flex text-center text-white bg-gray-500">
                          NEWS
                        </div>
                        <span className=" text-white font-bold">
                          Racing Games Browned
                          Butte roadert Cookies
                          Daily Breakfast
                        </span>
                        <div className=" w-full p-1 flex gap-2 text-gray-400 flex-row">
                          <div className="flex flex-row gap-1 items-center text-xxs text-gray-400">
                            <FiCalendar />
                            <span>
                              27 AUGUST 2024
                            </span>
                          </div>
                          <div className=" flex flex-row gap-1 items-center text-xxs text-gray-400">
                            <FiUser />
                            <span>
                              27 AUGUST 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FeatureComponent />
          </div>
        </div>
      </div>
    </>
  );
};
