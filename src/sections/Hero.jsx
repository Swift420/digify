import React from 'react'
import Lottie from 'lottie-react'
import Animation from "../assets/lottie/lottie3.json"
import Button from '../components/Button'
import arrowRight from "../assets/icons/arrow-right.svg"
const Hero = () => {
  return (
   

<section className='relative flex items-center justify-between pl-20 pr-20   mx-4 min-h-screen'>

    {/* Left side with large text */}
    <div className="w-3/5 ">
      <h1 className="text-8xl font-bold mb-4 text-gray-800">We transform ideas into <span className='text-blue-700'>digital</span>  success stories.</h1>
      {/* <p className="text-lg text-blue-500">
      Innovating ideas into digital triumphs, crafting excellence at every step.
      </p> */}
      <div className="pt-10">
      <Button label="Book an Appointment" iconUrl={arrowRight}/>

      </div>
    </div>

    {/* Right side with an image */}
    <div className="w-2/5 pr-20">
    <div style={{width: "600px"}}>
              <Lottie animationData={Animation}/>
            </div>
    </div>
  
</section>
   
  )
}

export default Hero