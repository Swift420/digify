import { navLinks } from "../constants"
import  dpsLogo  from '../assets/images/dpsLogo.png'
import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu =() => {
setIsMenuOpen(!isMenuOpen);
  }
  const navItems = [
    {link: "Overview", path: "#home"},
    {link: "Feature", path: "#feature"},
    {link: "About", path: "#about"},
    {link: "Pricing", path: "#pricing"},
  ]
  return (
    <>
     <nav className="bg-white md:px-14 p-4 max-w-screen-2xl  mx-auto text-primary fixed top-0 right-0 left-0">

<div className="text-lg container mx-auto flex justify-between items-center font-medium">
  <div className="flex items-center space-x-14">
    <a className="text-2xl font-semibold flex items-center space-x-3 text-primary">
      <img
    src={dpsLogo}
    className="w-20 inline-block item-center"
    /></a>

    <ul className="md:flex space-x-12 hidden">
      {
        navItems.map(({link, path})=> <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
      }
    </ul>
  </div>
  <div className="md:flex items-center hidden">
  <a href="#">
    <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600"> Book An Appointment</button>
  </a>
  </div>

  <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
        {
          isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>): (<FaBars className="w-6 h-6 text-primary "/>)
        }
      </button>
  </div>
</div>
</nav>
    

    <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
    {
        navItems.map(({link, path})=> <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
      }
    </div>
    </>
   


    // <header className="sm:px-24 px-8 py-8 absolute z-10 w-full">
    //     <nav className='flex justify-between items-center '>
    //     <a href="/">
    //       <img 
    //       src={dpsLogo}
    //       alt='Logo'
    //       width={100}
    //       height={50 }
    //       />
    //     </a>
    //     <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
    //       {navLinks.map((item)=> (
    //         <li key={item.label}>
    //           <a
    //           href={item.href}
    //           className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-700'
    //           >
    //             {item.label}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
      //  <a href="#">
      //       <button className="w-full text-white bg-blue-700 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-blue-600 hover:drop-shadow-md transition duration-300  ease-in-out"> Book An Appointment</button>
      //  </a>
    //     {/* <div className=' max-lg:block'>
    //         <h1>Book an appointment</h1>
          
    //     </div> */}
    //   </nav>
    // </header>
  )
}

export default Nav