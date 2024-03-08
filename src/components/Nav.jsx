import { navLinks } from "../constants"
import  dpsLogo  from '../assets/images/dpsLogo.png'
import  dpsLogo2  from '../assets/images/digify-logo.png'
import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu =() => {
setIsMenuOpen(!isMenuOpen);
  }
  const navItems = [
    {link: "Home", path: "home"},
    {link: "Services", path: "services"},
    {link: "About", path: "about"},
    {link: "Tech Stack", path: "techstack"},
  ]
  return (
    <>
    <nav className="bg-white md:px-14 p-4 mx-auto text-primary fixed top-0 right-0 left-0">
  <div className="container mx-auto">
    <div className="flex justify-between items-center font-medium">
      <div className="flex items-center space-x-14">
        <a className="text-2xl font-semibold flex items-center space-x-3 text-primary">
          <img src={dpsLogo2} className="w-20 inline-block item-center" />
        </a>
      </div>

      <div className="flex-grow md:flex items-center justify-center hidden ">
        <ul className="hidden md:flex space-x-12">
          {navItems.map(({ link, path }) => (
            <Link
              activeClass="active"
              key={link}
              spy={true}
              smooth={true}
              offset={-100}
              to={path}
              className="block hover:text-gray-300 cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:text-gray-300"
        >
          {isMenuOpen ? (
            <FaXmark className="w-6 h-6 text-primary" />
          ) : (
            <FaBars className="w-6 h-6 text-primary " />
          )}
        </button>
      </div>
    </div>
  </div>
</nav>

    

    <div className={`space-y-4 px-4 pt-24 pb-5 bg-[#090979] text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0 z-50" : "hidden"}`}>
    {
        navItems.map(({link, path})=> <Link activeClass="active" key={link} spy={true} smooth={true} offset={-80} to={path} className="block text-white hover:text-gray-300"onClick={toggleMenu}> {link}</Link>)
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