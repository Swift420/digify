import React from 'react'
import  dpsLogo  from '../assets/images/dpsLogo.png'
import  dpsLogo2  from '../assets/images/digify-logo.png'
import  dpsLogoTransparent  from '../assets/images/digify-transparent-logo.png'

function Footer() {
  return (
    <div className='bg-[#010851] md:px-14 p-4 mx-auto text-white'>
      <div className='my-2 flex flex-col md:flex-row gap-10 items-center'>
        {/* Left Section */}
        <div className="flex items-center">
          <img src={dpsLogoTransparent} className="w-20 h-auto" alt="DPS Logo" />
          <span className="ml-2 text-sm">Crafting Tomorrow's Solutions, Today.</span>
        </div>
        
        {/* Right Section */}
        <div className="ml-auto">
          {/* <p className="text-sm mb-2">+264 81 440 0089</p> */}
          {/* <p className="text-sm">Arians street, Klein Windhoek</p>
          <p className="text-sm">Windhoek, Namibia </p> */}
        </div>
      </div>
    </div>
  );
}


export default Footer