import React, {useState, useEffect} from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

type Props = {}

function Contact({}: Props) {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [subject, setSubject] = useState('')
     const [message, setMessage] = useState('')

     const handleSubmit = (e: { preventDefault: () => void }) => {
          e.preventDefault();
          const client = {
               name: name,
               email: email,
               subject: subject,
               message: message
          }
          console.log(client)
          window.location.href = `mailto:michaelchinye2018@gmail.com?subject=${subject}&body=Hi my name is ${name}.${message}`
     }
     return (
          <>
               <h3 className='uppercase tracking-[20px] text-gray-500 pt-14 xsm:text-1xl text-2xl md:text-4xl text-center py-10 '>Contact</h3>
               <div className='h-auto md:py-10 xsm:py-4 sm:py-8 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-30 justify-evenly mx-auto items-center'>
                    <div className='flex flex-col md:space-y-10 sm:space-y-8 xsm:space-y-5'>
                         <h4 className='md:text-4xl xsm:text-1xl sm:text-2xl text-center font-semibold'>
                              I have got just what you need {" "}
                              <span className='underline decoration-[#F7AB0A]/50'>lets Talk</span>
                         </h4>
                         <div className='md:space-y-10 xsm:space-y-5 sm:space-y-8'>
                              <div className='flex md:items-center space-x-5 md:justify-center sm:items-center sm:justify-start xsm:items-center xsm:justify-start'>
                                   <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                                   <p className='md:text-2xl xsm:text-1xl'>+2347087509689</p>
                              </div>
                              <div className='flex md:items-center space-x-5 md:justify-center sm:items-center sm:justify-start xsm:items-center xsm:justify-start'>
                                   <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                                   <p className='md:text-2xl xsm:text-1xl'>michaelchinye2018@gmail.com</p>
                              </div>
                              <div className='flex md:items-center space-x-5 md:justify-center sm:items-center sm:justify-start xsm:items-center xsm:justify-start'>
                                   <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                                   <p className='md:text-2xl xsm:text-1xl'>12, Igbeyinadun creascent</p>
                              </div>

                              <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-2 md:w-fit mx-auto '>
                                   <div className='flex md:flex-row md:space-x-2 sm:flex-col sm:space-y-2 xsm:flex-col xsm:space-y-2 md:space-y-0  '>
                                        <input className = 'contactInput' type="text" placeholder='Name' onChange={(e:any) => {setName(e.target.value)}} required />
                                        <input className = 'contactInput' type="email" placeholder='Email' onChange={(e:any) => {setEmail(e.target.value)}} required />
                                   </div>
                                   <input className = 'contactInput'type="text" placeholder='Subject' onChange={(e:any) => {setSubject(e.target.value)}} />
                                   <textarea className = 'contactInput' placeholder='Message' onChange={(e:any) => {setMessage(e.target.value)}} required />
                                   <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                              </form>
                              
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Contact