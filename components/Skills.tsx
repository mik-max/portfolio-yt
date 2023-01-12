import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'
import { Skill as SkillType } from '../typings'

type Props = {
     skills: SkillType[];
}

function Skills({skills}: Props) {
     return (
          <>   
               <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-gray-500 pt-14 text-2xl md:text-4xl text-center pb-2'>Skills</h3>
               <h3 className="uppercase md:tracking-[3px] tracking-[1px] text-gray-500 text-sm text-center sm:pb-5 xsm:pb-5 md:pb-10">Hover over a skill for current profieciency</h3>
               <motion.div className=' relative flex flex-col text-center md:text-left xl:flex:row max-w-[2000px] xl:px-20 md:min-h-[60vh] md:py-20 h-auto justify-center xl:space-y-0 mx-auto items-center' initial={{opacity: 0,}} whileInView = {{opacity: 1,}}viewport={{once: true,}} 
          transition={{duration: 1.5}}>
                    <div className='grid grid-cols-4 gap-5 xsm:gap-4 ' >
                         {
                              skills.slice(0, skills.length/2).map((skill, index) => (
                                   <Skill key={index} skill = {skill} />
                              ))
                         } 

                         {
                              skills.slice(skills.length/2, skills.length).map((skill, index) => (
                                   <Skill key={index} skill = {skill} directionLeft />
                              ))
                         }     
                    </div>
               </motion.div>
          </>
     )
}

export default Skills;