import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'


type Props = {
     pageInfo: PageInfo
}

function About({pageInfo}: Props) {
     return (
          <>
               <h3 className='  uppercase md:tracking-[20px] tracking-[15px] text-gray-500 text-2xl md:text-4xl text-center py-10'>About</h3>
               <motion.div className='flex flex-col relative h-auto md:min-h-[60vh] md:py-20 text-center md:text-left md:flex-row max-w-7xl md:px-10 px-5 justify-evenly mx-auto items-center' initial={{opacity: 0,}} whileInView = {{opacity: 1,}}viewport={{once: true,}} 
               transition={{duration: 1.5}}>
                    
                    <motion.img initial={{ x:-200,opacity: 0,}} whileInView = {{ x: 0,opacity: 1,}}viewport={{once: true,}} 
                    transition={{duration: 1.2}} src={urlFor(pageInfo.profilePic).url()}  className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-80 md:h-96 xl:w-[500px] xl:h-[600px]'  />

                    <div className='md:space-y-10 space-y-5 px-0 md:px-10'>
                         <h4 className='text-1xl md:text-4xl font-bold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                         <p className='md:text-base text-sm text-left font-thin '>{pageInfo.backgroundInformation}</p>
                    </div>
               </motion.div>
          </>

     )
}

export default About