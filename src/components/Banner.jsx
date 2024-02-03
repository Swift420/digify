import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../constants/variants'
import { PopupButton } from 'react-calendly'
import { Link } from 'react-scroll'

const Banner = ({bannerImg, heading, subheading, btn1, btn2}) => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        {/* Banner Image */}

    <div
    // variants={fadeIn("down", 0.2)}
    // initial="hidden"
    // whileInView="show"
    // viewport={{once:false, amount:0.7}}
    >
            <img src={bannerImg} className='lg:h-[360px]' />
        </div>
        {/* Banner content */}
        <div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView="show"
          // viewport={{once:false, amount:0.7}}
        className='md:w-3/5'>
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
            <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
            <div className='space-x-5 space-y-4'>
               
            <Link  spy={true} smooth={true} offset={-100} to={"services"}>   <button className='btnPrimary'>{btn1}</button></Link>
                {/* <button className='btnPrimary'>{btn2}</button> */}
                <PopupButton
                className='btnPrimary'
        url="https://calendly.com/digify_/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Book An Appointment"
      />
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Banner

