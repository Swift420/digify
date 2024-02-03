import React from 'react'
import  dpsLogo  from '../assets/images/dpsLogo.png'
import  dpsLogo2  from '../assets/images/digify-logo.png'

function Footer() {
  return (
    <div className='bg-[#010851] md:px-14 p-4 mx-auto text-white' >
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8'>
            <a className="text-2xl font-semibold flex items-center space-x-3 text-primary">
      <img
    src={dpsLogo2}
    className="w-20 inline-block item-center"
    /></a>
    <p className='md:w-1/2'>This is a simple paragraph comprised of three major components.
        The first sentence, which is often a declarative sentence.
    </p>

    <div>
                {/* <input type='email' name='email' id='email' placeholder='Your Email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/> */}
            </div>
            </div>
            {/* Footer navigations */}
            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap  gap-8 items-start justify-around'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <a href='/' className='block hover:text-gray-300'>Overview</a>
                        <a href='/' className='block hover:text-gray-300'>Features</a>
                        <a href='/' className='block hover:text-gray-300'>About</a>
                        <a href='/' className='block hover:text-gray-300'>Pricing</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Contacts</h4>
                    <ul className='space-y-3'>
                        <p className=' hover:text-gray-300'>+264 81 234567</p>
                        <p className=' hover:text-gray-300'>123 abc abc</p>
                        <p className=' hover:text-gray-300'>qwertyqwerty, qwe - qwer</p>
                        <p className=' hover:text-gray-300'>1234567</p>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer