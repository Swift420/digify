import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../constants/variants'

const FeatureCard = ({featureImg, isPaddedUp, title}) => {
  return (
    // <div className={`bg-[rgba(255,255,255,0.04)] rounded-[35px] h-80 shadow-3xl ${isPaddedUp ? "md:mt-16":""} p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer`}>
    <div className={`bg-[rgba(255,255,255,0.04)] rounded-[35px] h-80 shadow-3xl ${isPaddedUp ? "md:mt-16":""} p-8 flex justify-center items-center cursor-pointer  sm:hover:scale-100 lg:hover:scale-110 md:hover:scale-110 xl:hover:scale-110 2xl:hover:scale-110 duration-300`}>
              <div className="">
                <img src={featureImg} className=' h-52' />
                <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">
                  
                  {title}
                </h5>
              </div>
            </div>
  )
}

export default FeatureCard