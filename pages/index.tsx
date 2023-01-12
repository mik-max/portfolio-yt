import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header, Hero, About, WorkExperience, Skills, Projects, Contact } from '../components'
import { Experience, PageInfo, Project, Skill, Social } from '../typings';

type Props = {
     pageInfo: PageInfo;
     experiences: Experience[];
     skills: Skill[];
     projects: Project[];
     socials: Social[];
}
const Home = ({ pageInfo, experiences, skills, projects,  socials}: Props) => {
     const [hasScrolled, setHasScrolled] = useState(false);
     useEffect(() => {
           async function fetchPageInfo () {
               const res =  await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
               const data = await res.json();
               console.log(data)
               const pageInfo: PageInfo = data.pageInfo
               return pageInfo;
          }
          fetchPageInfo()
     }, [])
     useEffect(() => {
          
          document.getElementById('App')!.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     })
 
     const handleScroll = () => {
          if(document.getElementById('App')!.scrollTop > 0){
               setHasScrolled(true);
          }else{
               setHasScrolled(false);
          }

         
     }
     
     return (
          <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden  md:scrollbar  md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80 snap-mandatory z-0' id='App'>
               <Head>
                    <title>Mikecodes</title>
               </Head>
               <Header socials = {socials} hasScrolled = {hasScrolled} />
               {/* Hero */}
               <section id='hero' className='snap-start' >
                    <Hero pageInfo = {pageInfo} />
               </section>
               {/* About */}
               <section id='about'className='snap-center' >
                    <About pageInfo = {pageInfo} />
               </section>
               {/* Experience */}
               <section id='experience'className='snap-center' >
                    <WorkExperience experiences = {experiences} />
               </section>
               {/* Skils */}
               <section id='skills'className='snap-start' >
                    <Skills skills = {skills} />
               </section>
               {/* Projects */}
               <section id='projects'className='snap-start' >
                    <Projects projects = {projects} />
               </section>
               {/* contact Me */}
               <section id='contact'className='snap-start' >
                    <Contact/>
               </section>
          </div>

     )
}

export default Home


export const getStaticProps: GetStaticProps<Props> = async () =>{

     const pageInfo = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
     const pageInfoData = await pageInfo.json()

     const experience = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
     const experienceData = await experience.json()

     const skills = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
     const skillsData = await skills.json()

     const socials = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
     const socialsData = await socials.json()

     const projects = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
     const projectsData = await projects.json()
     return {
          props:{
               pageInfo: pageInfoData.pageInfo,
               experiences: experienceData.experiences,
               skills: skillsData.skills,
               socials: socialsData.socials,
               projects: projectsData.projects,
          },
          revalidate: 10000,
     }
}


