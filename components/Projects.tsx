import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
type Props = {
     projects: Project[]
}

function Projects({projects}: Props) {
     return (
          <>
               <h3 className='uppercase tracking-[20px] text-gray-500 pt-20 text-2xl md:text-4xl text-center '>Projects</h3>
               <motion.div className='h-auto md:min-h-[60vh] md:py-20 relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ' initial={{opacity: 0,}} whileInView = {{opacity: 1,}}viewport={{once: true,}} 
          transition={{duration: 1.5}}>
                    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                         {projects.map((project, index:number) => (
                              <div key={index} className = 'w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-5 md:p-20 xl:p-44 h-auto '>
                                   <img src={urlFor(project.image).url()} alt="" className='mx-auto'  />
                                   <div className='space-y-3 px-0 max-w-6xl'>
                                        <p className='md:text-1xl xsm:text-sm font-normal text-center'>
                                             <span className='underline decoration-[#F7AB0A]/50'>Case Study {index + 1} of {projects.length}</span>
                                             
                                        </p>
                                        <h4 className=' text-center text-1xl md:text-4xl font-semibold' >
                                             {project?.title}
                                        </h4>

                                        <div className='flex space-x-2 my-2 justify-center'>
                                        {
                                             project.technologies.map((tech, index) => (
                                                  <img className='h-10 w-10 rounded-full' src={urlFor(tech.image).url()} alt="" key={index} />
                                             ))
                                             
                                        }    
                                        </div>
                                        
                                        <p className='text-lg text-center md:text-left xsm:text-[16px]'>{project.summary}</p>
                                        <div className="flex justify-center items-center">
                                        <a type='link' target='_blank' href = {project.points} className='viewButton mx-auto' rel="noreferrer">View Live</a>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/30 left-0 h-[500px] -skew-y-12 ' />
               </motion.div>
          </>
     )
}

export default Projects