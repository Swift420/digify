import React from 'react'
import banner from "../assets/images/banner.png"
import Banner from '../components/Banner'
const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id="home">
         <Banner bannerImg={banner} heading={"We transform ideas into digital success stories."} subheading={"From ideation to digital triumphs, we navigate the journey, transforming concepts into compelling success narratives in the digital realm. "} btn1={"Get Started"} btn2={"Book an Appointment"}/>   
    </div>
  )
}

export default Home