import React from "react";
import featureImg from "../assets/images/feature.png";
import FeatureCard from "../components/FeatureCard";
import ideaValidationImg from "../assets/images/ideavalidation.svg";
import appDevImg from "../assets/images/app_dev.svg";
import appDevImg2 from "../assets/images/app_dev2.svg";
import webDevImg from "../assets/images/web_dev.svg";
import webappdesign from "../assets/images/ui_ux.svg";
import validation from "../assets/images/validationImg.svg";
import ui_ux from "../assets/images/ui_ux_design.svg";
import ui_ux3 from "../assets/images/design3.svg";
import appDev3 from "../assets/images/appdev3.svg";
import validation3 from "../assets/images/validation3.svg"
import {motion} from "framer-motion"
import { fadeIn } from '../constants/variants'

const Features = () => {

  return (

    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="services">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Featured Cards */}
        <div
            // variants={fadeIn("down", 0.2)}
            // initial="hidden"
            // whileInView="show"
            // viewport={{once:false, amount:0.7}}
        className="w-full">
          <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <FeatureCard featureImg={validation3} title={"Idea Validation"} />
            <FeatureCard featureImg={webappdesign} isPaddedUp={true} title={"Web & App Design"}/>
            <FeatureCard featureImg={ui_ux3} title={"UX/UI Audit & Redesign"}/>
            <FeatureCard featureImg={appDev3}  isPaddedUp={true} title={"Mobile App Development"}/>
            <FeatureCard featureImg={webDevImg} title={"Website Development"}/>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
