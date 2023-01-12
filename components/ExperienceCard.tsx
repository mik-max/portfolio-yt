import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
type Props = {
     experience: Experience
}

function ExperienceCard({experience}: Props) {
     return (
          <article className='flex  flex-col rounded-lg items-center space-y-7 py-5 flex-shrink-0 w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opcity duration-200 overflow-hidden '>
               <motion.img className="rounded-full h-32 w-32 md:mt-24  xl:w-[200px] xl:h-[200px] object-cover object-center" src = {urlFor(experience.companyImage).url()} alt='' initial = {{y: -100, opacity:0,}} transition = {{duration: 1.2}} whileInView = {{opacity: 1, y: 0}} viewport = {{once: true}} />
               <div className='px-0 md:px-10'>
                    <h4 className='text:2xl md:text-4xl font-light'>{experience.jobTitle}</h4>
                    <p className='font-bold text-2xl mt-1'>Skyttechnologies</p>
                    <div className='flex space-x-2 my-2'>
                         {
                              experience.technologies.map((tech, index) => (
                                   <img src={urlFor(tech.image).url()} alt="" className='h-10 w-10 rounded-full' key={index} />  
                              ))
                         }
                    </div>
                    <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateEnded).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}</p>
                    <ul className='list-disc space-y-4 ml-5 text-lg'>
                         {experience.points.map((point, index) => (
                               <li key = {index}>{point}</li>
                         ))}

                    </ul>
               </div>
          </article>
     )
}

export default ExperienceCard