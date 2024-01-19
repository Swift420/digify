import validation3 from "../assets/images/validation3.svg"
import {motion} from "framer-motion"
import { fadeIn } from '../constants/variants'
const AboutRight = ({aboutImg, heading, subheading}) => {
  return (
    <div className='md:px-14 p-4 container mx-auto max-w-s space-y-10'>
        <div className=""></div>
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.7}}
        className="md:w-1/2">
            <img src={aboutImg} className=""/>
        </motion.div>

        {/* Content */}
        <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.7}}
        className="md:w-2/5">
            <h2 className="md:text-5xl text-4xl font-bold text-primary mb-5 leading-normal">{heading}</h2>
            <p className="text-tertiary text-lg mb-7">{subheading}</p>
        </motion.div>
    </div>

</div>
  )
}

export default AboutRight