import React from 'react'
import Image from '../assets/react.svg'
const Navbar2 = () => {
  return (
    <>
      <nav className='bg-white shadow-emerald-100'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex justify-between h-16  items-center'>
            <div className='flex-shrink-0 flex items-center'>
              <img src={Image} alt=''/>
            </div>
            <div className='flex md:hidden'></div>
          </div>
        </div>
      </nav>
    </>
   
  )
}

export default Navbar2