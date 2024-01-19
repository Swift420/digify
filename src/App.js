import Nav from './components/Nav'
import Features from './sections/Features';
import Home from './sections/Home';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import mission from "./assets/images/mission3.svg";
import vision from "./assets/images/vision.svg";
import Footer from './sections/Footer';
import Calender from './sections/Calender';

function App() {
  return (
    <>
    <Nav/>
    {/* <Hero/> */}
    <Home/>
    <Features/>
    <AboutLeft aboutImg={vision} heading={"Vision"} subheading={"Prioritize strategic success by validating and ensuring the viability of your concepts before committing valuable resources. Our expert guidance extends to refining your ideas into meticulously crafted, actionable plans, paving the way for sustainable and effective implementation."}/>
    <AboutRight aboutImg={mission} heading={"Mission"} subheading={"Prioritize strategic success by validating and ensuring the viability of your concepts before committing valuable resources. Our expert guidance extends to refining your ideas into meticulously crafted, actionable plans, paving the way for sustainable and effective implementation."}/>
   {/* <Calender/> */}
    <Footer/>
    </>
  );
}

export default App;
