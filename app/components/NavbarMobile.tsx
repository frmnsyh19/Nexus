import React from 'react'
import Dawer from './Dawer'

const NavbarMobile = () => {
  return (
    <>
      <div className='navbar lg:hidden p-3 bg-indigo-900 w-full flex justify-between items-center'>
        <Dawer />
        <div className=' p-2'>
          <p className=' text-lg text-white'>Logo</p>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile