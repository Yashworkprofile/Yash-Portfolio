import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'

import { MdContactPage } from "react-icons/md";


const Hero = () => {
  return (
    <div className="pb-20 pt-36 " id='resume'>
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill="white"/>
        <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-40 left-80  h-[80vh] w-[50vw]' fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
    
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Portfolio WebSite with next.js
            </h2>
            <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Turning Data and Design Into Meaningful Digital Journeys."/>
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I&apos;m Yash, a Software Developer
            </p>
            <a href="https://drive.google.com/file/d/1SZkKFjiwD_A6v1RgJx8C870AnIVnxO_2/view?usp=drive_link" target='_blank'><MagicButton title="See My Resume "
            icon={<MdContactPage size={25}/>}
            position='right'
            />
            
            </a>
          </div>
        
     
    </div>
    </div>
  )
}

export default Hero