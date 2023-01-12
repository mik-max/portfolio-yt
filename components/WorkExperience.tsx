import React from 'react'
import {motion} from 'framer-motion'
type Props = {
     experiences: Experience[]
}
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

function WorkExperience({experiences}: Props) {
     return (
         <>    
               <h3 className=' uppercase md:tracking-[20px] tracking-[15px] text-gray-500 text-2xl md:text-4xl text-center py-10'>Experience</h3>
               <motion.div className='h-auto md:min-h-[60vh] md:py-20 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full md:px-10 xsm:px-0 justify-evenly mx-auto items-center ' initial={{opacity: 0,}} whileInView = {{opacity: 1,}}viewport={{once: true,}} 
               transition={{duration: 1.5}}>
                    <div className='w-full flex space-x-5 overflow-x-scroll md:p-10 xsm:px-0 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                         {
                              experiences.map((experience, index) => (
                                   <ExperienceCard key={index} experience = {experience} />   
                              ))
                         }
                    </div>
                    
               </motion.div>
         </>
     )
}

export default WorkExperience;