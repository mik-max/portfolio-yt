import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';
type Props = {
     directionLeft?: boolean;
     skill: Skill
}

function Skill({directionLeft, skill}: Props) {
     return (
          <div className='group relative flex cursor-pointer'>
               <img 
                    
                    src = {urlFor(skill.image).url()}
                    className='rounded-full border border-gray-500 object-cover w-24 h-24 xsm:w-[50px] xsm:h-[50px] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
               />
               <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xsm:w-[50px] xsm:h-[50px] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                    <div className='flex flex-col items-center justify-center h-full'>
                         <p className='text:1xl md:text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
                         <h6 className='text-[5px] md:text-[10px] font-bold text-black opacity-100'>{skill.title}</h6>
                    </div>
               </div>
          </div>
     )
}

export default Skill;