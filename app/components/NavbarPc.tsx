"use client";

import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const NavbarPc = () => {
  return (
    <>
      {/* <div className=' w-full hidden lg:flex flex-col justify-start items-center'>
        <div className=' w-full bg-indigo-950 h-16 flex justify-center items-center'>
          <img className="w-36 h-full" src="/team/logo.png"></img>
        </div>
        <div className=' w-full bg-indigo-900 p-3 flex justify-center gap-10 items-center'>
          <Link href="/" className=' hover:text-orange-500 text-white'>Home</Link>
          <Link href="/about" className=' hover:text-orange-500 text-white'>About</Link>
          <Link href="/travel" className=' hover:text-orange-500 text-white'>Travel</Link>
          <Link href="/healthy" className=' hover:text-orange-500 text-white'>Healthy</Link>
          <Link href="/technology" className=' hover:text-orange-500 text-white'>Technology</Link>

        </div>
      </div> */}

      <div className="bg-indigo-900 w-full hidden lg:flex justify-center items-center">
        <div className=" w-11/12 navbar bg-indigo-900 text-white">
          <div className="flex-1 p-1">
            <Link
              href="/"
              className="btn btn-ghost text-xl mb-3">
              <img
                className=" w-20"
                src="/team/logo.png"></img>
            </Link>
          </div>
          <div className="flex-none">
            <div className=" flex justify-center items-center gap-2">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link
                    href="/about"
                    className=" hover:text-orange-500 text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel"
                    className=" hover:text-orange-500 text-white">
                    Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/healthy"
                    className=" hover:text-orange-500 text-white">
                    Healthy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technology"
                    className=" hover:text-orange-500 text-white">
                    Technology
                  </Link>
                </li>
              </ul>
              <div className=" flex justify-start gap-3">
                <FiFacebook className=" text-base" />
                <FiInstagram className=" text-base" />
                <FiTwitter className=" text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPc;
