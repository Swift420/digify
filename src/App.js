import Nav from './components/Nav'
import Features from './sections/Features';
import Home from './sections/Home';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import mission from "./assets/images/mission3.svg";
import vision from "./assets/images/vision.svg";
import Footer from './sections/Footer';
import Calender from './sections/Calender';
import FeatureCard from './components/FeatureCard';

import webDevImg from "./assets/images/web_dev.svg";
import webappdesign from "./assets/images/ui_ux.svg";
import ui_ux3 from "./assets/images/design3.svg";
import appDev3 from "./assets/images/appdev3.svg";
import roadmap from "./assets/images/roadmap.jpg";
import roadmap2 from "./assets/images/roadmap2.png";
import validation3 from "./assets/images/validation3.svg"
import {motion} from "framer-motion"
import { fadeIn } from './constants/variants'
import FeatureModal from './components/featureModal';
import { useState } from 'react';
import { TechStackTimeLine } from './sections/Timeline';

function App() {

  const [showIdeaModal, setShowIdeaModal] = useState(false)
  const [showDesignModal, setShowDesignModal] = useState(false)
  const [showUXModal, setShowUXModal] = useState(false)
  const [showMobileModal, setShowMobileModal] = useState(false)
  const [showWebModal, setShowWebModal] = useState(false)
  const chipUXTexts = [
    "UX Design",
    "User Flow Diagrams",
    "UI Design",
    "App and Web Prototyping (Figma)",

  ]
  const chipMobileTexts = [
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Flutter App Development",
    "Enteprise Mobile App Development",

  ]

  const chipWebDevTexts = [
    "Website Design and Development",
    "Web Application Development",
    "Custom Software Development",
    "Web Portal Development",

  ]
  
  return (
    
    <>
    
 <FeatureModal chips={[]} isVisible={showIdeaModal} onClose={()=>setShowIdeaModal(false)} title={`Idea Validation`} imageUrl={validation3} modalContent={`Concept validation is a crucial step in ensuring the viability of a new app idea before committing significant resources. It involves meticulously assessing user needs, market dynamics, and obtaining user feedback to guarantee that the development efforts are directed towards creating a product with market demand and potential success.`} />
 <FeatureModal chips={chipUXTexts} isVisible={showDesignModal} onClose={()=>setShowDesignModal(false)} title={`Web & App Design`} imageUrl={webappdesign} modalContent={`UX/UI design is the strategic development of an app or website's user experience and interface. By prioritizing factors such as usability, accessibility, and visual design, this process aims to produce a product that not only appeals to users but also aligns with business objectives, promoting engagement and efficiency`} />
 <FeatureModal chips={[]} isVisible={showUXModal} onClose={()=>setShowUXModal(false)} title={`UX/UI Audit & Redesign`} imageUrl={ui_ux3} modalContent={`A UX Audit offers a comprehensive review of key usability elements, including accessibility, navigation, and content. This analysis helps identify areas for improvement, ensuring that the app or website aligns with business goals and maximizes user satisfaction, ultimately contributing to positive brand perception.`} />
 <FeatureModal chips={chipMobileTexts} isVisible={showMobileModal} onClose={()=>setShowMobileModal(false)} title={`Mobile App Development`} imageUrl={appDev3} modalContent={`Mobile app development is an indispensable strategy for businesses seeking broader market reach. In an era dominated by mobile devices, creating seamless and intuitive apps is vital for establishing a strong online presence and delivering an enhanced user experience to a wider audience.`} />
 <FeatureModal chips={chipWebDevTexts} isVisible={showWebModal} onClose={()=>setShowWebModal(false)} title={`Website Development`} imageUrl={webDevImg} modalContent={`Web app development provides a versatile solution for businesses aiming to reach a broad audience without the need for downloads or installations. By designing user-friendly interfaces, coding logic, and ensuring smooth online deployment, web apps offer a convenient way for businesses to showcase their services or products, catering to the evolving needs of the digital market.`} />
  




    <Nav/>
    {/* <Hero/> */}

    <Home/>
    {/* <Features/> */}
   
    <div className="my-24 md:px-14 px-4  mx-auto" id="services">
    <div className="flex justify-center pb-5">
    <div className="md:text-5xl text-4xl font-bold text-primary mb-5 leading-normal">
        Our Awesome Services
        
    </div>
</div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Featured Cards */}
        <div
            // variants={fadeIn("down", 0.2)}
            // initial="hidden"
            // whileInView="show"
            // viewport={{once:false, amount:0.7}}
        className="w-full">
          <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div onClick={()=> setShowIdeaModal(true)}>
            <FeatureCard featureImg={validation3} title={"Idea Validation"} />

            </div>
            <div onClick={()=> setShowDesignModal(true)}>
            <FeatureCard featureImg={webappdesign} isPaddedUp={true} title={"Web & App Design"}/>

            </div>

            <div onClick={()=> setShowUXModal(true)}>
            <FeatureCard featureImg={ui_ux3} title={"UX/UI Audit & Redesign"}/>

            </div>
            <div onClick={()=> setShowMobileModal(true)}>

            <FeatureCard featureImg={appDev3}  isPaddedUp={true} title={"Mobile App Development"}/>
            </div>
            <div onClick={()=> setShowWebModal(true)}>
            <FeatureCard featureImg={webDevImg} title={"Website Development"}/>

            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>

    <AboutLeft aboutImg={vision} heading={"Vision"} subheading={"Prioritize strategic success by validating and ensuring the viability of your concepts before committing valuable resources. Our expert guidance extends to refining your ideas into meticulously crafted, actionable plans, paving the way for sustainable and effective implementation."}/>
    <AboutRight aboutImg={mission} heading={"Mission"} subheading={"Prioritize strategic success by validating and ensuring the viability of your concepts before committing valuable resources. Our expert guidance extends to refining your ideas into meticulously crafted, actionable plans, paving the way for sustainable and effective implementation."}/>
   {/* <Calender/> */}
   <TechStackTimeLine/>

   <div className='pt-10'>
   <div class="grid min-h-[500px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
   <div className='md:text-5xl text-4xl font-bold text-primary mb-5 leading-normal'>Our Launch Road Map</div>
    
  <img
    class="object-fit object-center w-full rounded-lg shadow-md shadow-blue-gray-900/50"
    src={roadmap}
    alt="nature image"
  />
</div>
   </div>
    <Footer/>

    {/* <FeatureModal open={open} onClose={()=> setOpen(false)}/> */}

    </>
  );
}

export default App;
