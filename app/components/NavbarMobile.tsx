"use client"

import React, { useState, useEffect } from 'react';
import Dawer from './Dawer'

const NavbarMobile = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed navbar lg:hidden flex justify-between items-center top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-indigo-900 shadow-lg' : 'bg-transparent'
        }`}>
        <Dawer />
        <div className=' p-2'>
          <div className='p-2'>
            <img src="/team/logo.png" className='  w-16' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile