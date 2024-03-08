import React from 'react'
import banner from "../assets/images/banner.png"
import banner2 from "../assets/images/bannerimg1.svg"
import banner3 from "../assets/images/bannerimg2.svg"
import banner4 from "../assets/images/bannerimg3.svg"
import banner5 from "../assets/images/bannerimg4.svg"
import Banner from '../components/Banner'
const Home = () => {
  return (
    // <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id="home">
    <div className='md:px-12 p-4  mx-auto mt-24' id="home">
         <Banner bannerImg={banner5} heading={"Digify is your digital partner"} subheading={"Bring on a team of seasoned experts to define, design, build, and maintain your app or custom website. Digify works with clients from all industries who are building great businesses through technology initiatives."} btn1={"Get Started"} btn2={"Book an Appointment"}/>   
    </div>
  )
}

export default Home