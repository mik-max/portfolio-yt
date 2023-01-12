import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
     return (
          <motion.div className='  relative flex justify-center items-center' 
          initial={{
               opacity: 0,
          }}
          animate={{
               scale: [1, 2, 2, 3, 1],
               opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
               borderRadius: ["20%", "20%", "50%", "80%", "20%"]
          }}
          transition={{
               duration: 2.5,
          }}
          >
               <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px]  mt-52 animate-ping'/>
               <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
               <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
               <div className='absolute border border-[#F7AB0A] rounded-full opacity-20 sm:h-[500px] sm:w-[500px] md:h-[650px] md:w-[650px] xsm:h-[500px] xsm:w-[500px] mt-52 animate-pulse'/>
               <div  className='absolute border border-[#333333] rounded-full xsm:h-[600px] xsm:w-[600px] sm:h-[650px] sm:w-[650px] md:h-[800px] md:w-[800px] mt-52'/>
          </motion.div>
     )
}

export default BackgroundCircles