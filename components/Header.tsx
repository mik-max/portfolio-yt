import React, {useEffect} from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
import { Social } from '../typings';

type Props = {
     socials: Social[];
     hasScrolled: boolean;
}


function Header({socials, hasScrolled}: Props) {
    
     useEffect(() => {
          const header = document.querySelector('header') as HTMLElement
          header.classList.toggle('customSticky', hasScrolled);
     })
     
    
     return (
          <header className='sticky top-0 p-5 md:px-10 flex items-start justify-between z-50 xl:items-center' >
               {/* max-w-7xl mx-auto */}
               <motion.div className='flex flex-row items-center' 
               initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
               }}
               animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
               }}
               transition={{
                    duration: 1.5,
               }}
               >
                    {/* Social Icons */}
                    {
                         socials?.map((social) => (
                              <SocialIcon url={social.url} bgColor = 'transparent' fgColor={hasScrolled ? 'black': 'gray'} className = '' target = '_blank'  key = {social._id} />
                         ))
                    }
                    
               </motion.div>
               <Link href = '#contact'>
                    <motion.div className={hasScrolled? "flex flex-row items-center text-black cursor-pointer": "flex flex-row items-center text-gray-500 cursor-pointer"}
                    initial={{
                         x: 500,
                         opacity: 0,
                         scale: .5,
                    }}
                    animate={{
                         x: 0,
                         opacity: 1,
                         scale: 1,
                    }}
                    transition={{
                         duration: 1.5,
                    }}
                    >
                         <SocialIcon className='cursor-pointer' network='email'  fgColor={hasScrolled ? 'black': 'gray'} bgColor='transparent' />
                         <p className='uppercase hidden md:inline-flex text-sm o'>Get in touch</p>
                    </motion.div>
               </Link>
          </header>
     )
}

export default Header;