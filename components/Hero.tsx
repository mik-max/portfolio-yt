import React from 'react'
import Link from 'next/link'
import BackgroundCircles from './BackgroundCircles'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
     pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
     // console.log(pageInfo)
     const [text, count] = useTypewriter({
          words: [`Hi, the name is ${pageInfo?.name}`, "I am a full stack software developer", "A guy-who-loves-index.tsx", "<ButLovesToCodeMore/>"],
          loop: true,
          delaySpeed: 2000,
     })
     // console.log(pageInfo)
     return (
          <div className='min-h-screen h-[900px] pt-10 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
               <BackgroundCircles/>
               <img src={urlFor(pageInfo.heroImage).url()} alt="" className='relative rounded-full h-[120px] w-[120px] mx-auto object-cover' />
               <div className='z-20'>
                    <h2 className=' text-sm uppercase text-gray-500 pb-2 md:tracking-[15px] tracking-[10px]'>{pageInfo.role}</h2>
                    <h1 className=' md:text-5xl lg:text-6xl font-semibold px-10'>
                         <span className=' text-[20px]  mr-3'>{text}</span>
                         <Cursor cursorColor='#F7AB0A' />
                    </h1>
                    <div className='pt-5'>
                        <Link href='#about'>
                              <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
                        </Link>
                        <Link href='#experience'>
                              <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button>
                        </Link>
                        <Link href='#skills'>
                              <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
                        </Link>
                        <Link href='#projects'>
                              <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
                        </Link>
                        
                         
                         
                    </div>
               </div>
          </div>
     )
}

export default Hero