"use client";
import React, { useState } from 'react'
import {easeInOut, motion,AnimatePresence} from "framer-motion";
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {BsArrowUpRight,BsGithub} from "react-icons/bs";
import {Swiper,SwiperSlide} from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import Image from 'next/image';
import { useEffect } from 'react';
import "swiper/css";
const page = () => {
  const projects=
  [
    {
      num:'01',
      category:'Frontend project',
      title:'Elite restaurant project',
      description:'This project is a multi-page, responsive website that features a robust API for food and drink data. The development process took one month, during which I focused on creating a user-friendly experience across all devices , In this project, I initially encountered challenges with managing complex state and data flows. To address this, I integrated Redux, which streamlined state management, improved data handling, and made the application more scalable and maintainable',
      image:'/Screenshot 2024-08-11 091752.png',
      stack:[{name:'React js'},{name:'Typescript'},{name:'CSS 3'}] ,
      live:'https://abood123-dev.github.io/rest-elite/',
      github:'https://github.com/abood123-dev/rest-elite'
    },
    {
      num:'02',
      category:'Frontend project',
      title:'Real Estate project',
      description:'This project is a multi-page, responsive website that features a robust API for villas and appartments data. The development process took one month, during which I focused on creating a user-friendly experience across all devices , In this project, I initially encountered challenges with managing complex state and data flows. To address this, I integrated Redux, which streamlined state management, improved data handling, and made the application more scalable and maintainable',
      image:'/Screenshot 2024-09-10 053258.png',
      stack:[{name:'React js'},{name:'Typescript'},{name:'CSS 3'}] ,
      live:'https://abood123-dev.github.io/Realestate-project/',
      github:'https://github.com/abood123-dev/Realestate-project'
    },
    {
      num:'03',
      category:'full stack project',
      title:'Car store project',
      description:'CarVerse is a sleek car store web app built with Next.js and styled using Tailwind CSS. It offers a smooth, responsive interface for browsing a variety of cars, with real-time data pulled from a dynamic API. Features include fast performance, intuitive car listings, and a modern, dark mode-ready design.',
      image:'/Screenshot 2025-05-11 124201.jpg',
      stack:[{name:'Next js'},{name:'Typescript'},{name:'Tailwind CSS'}] ,
      live:'https://cars-liard-alpha.vercel.app/',
      github:'https://github.com/abood123-dev/Cars'
    }
    
  ]
  const [project,setproject]=useState(projects[0]);
  const HandleSlideChange=(swiper :SwiperClass)=>
    {
       const currentIndex=swiper.activeIndex;
       setproject(projects[currentIndex]);
       setTimeout(() => setswipe(false), 200);
    }
    const [Swipe,setswipe]=useState<boolean>(true);
    useEffect(() => {
  console.log("Swipe changed to:", Swipe);
}, [Swipe]);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{
      delay:2.4,duration:0.4,ease:easeInOut
    }}}>
       {Swipe ? (
          <div className="absolute inline-block md:top-24 md:left-[900px] top-24 left-[100px]" >
      <div className="absolute md:-bottom-2   w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-b-gray-200" />
      <div className="bg-transparent text-[#00ff99] border border-white/20 p-4 rounded-md shadow-md">
        Swipe to see more projects!
      </div>
      </div>) : null}
       <div className='flex md:flex-row md:gap-[120px] flex-col-reverse gap-[5px] items-center justify-center md:-ml-12 md:mb-5'>        
        <div className={`flex flex-col items-start gap-3 md:w-[600px] w-[300px] md:ml-28 -ml-10 md:mt-10 ${!Swipe ? 'sm:-mt-[400px]' : ''}`}>
             <div className='md:text-5xl md:font-extrabold text-3xl font-bold text-outline text-transparent mb-5 md:mb-0'>{project.num}</div>
             <div className='text-white font-extrabold text-[30px] capitalize'>{project.category}</div>
             <div className='text-gray-400 font-normal text-[15px]'>{project.description}</div>
                <div  className='flex flex-row gap-5 text-[#00ff99]'>
             {project.stack.map((stack,index)=>
              {
                return(
             
                 <div key={index}>
                 {stack.name}
                </div>
              
                )
              })}
              </div>
              <div className='border border-white/20 w-full'></div>
              <div className='flex flex-row gap-5'>
                <Link href={project.live} legacyBehavior>
                 <a target="_blank" rel="noopener noreferrer">
                 <TooltipProvider delayDuration={100}>
                  <Tooltip>
                   <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group'>
                    <BsArrowUpRight className='text-white text-3xl group-hover:text-[#00ff99]'/>
                    <TooltipContent className='bg-white'>
                    <p>Live Project</p> 
                    </TooltipContent>
                    </TooltipTrigger> 
                  </Tooltip>
                 </TooltipProvider>
                </a>
                </Link>
                <Link href={project.github} legacyBehavior>
                 <a target="_blank" rel="noopener noreferrer">
                 <TooltipProvider delayDuration={100}>
                  <Tooltip>
                   <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group'>
                    <BsGithub className='w-[30px] h-[30px]'/>
                    <TooltipContent className='bg-white'>
                    <p>Github repository</p> 
                    </TooltipContent>
                    </TooltipTrigger> 
                  </Tooltip>
                 </TooltipProvider>
                </a>
                </Link>
              </div>
            </div>
               
       
      
       
        
             <div className="md:w-[370px] md:h-[230px] w-[350px] h-[400px] mx-auto overflow-hidden">
         
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    onSlideChange={HandleSlideChange}
    className="w-full h-full"
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index} className="w-full h-full">
        <div  onClick={()=>
              
               setswipe(false)
              
              } className="relative w-full h-full md:mt-0 mt-[20px]">
          <Image
            src={project.image}
            alt=""
            fill
            className=" md:object-fill  object-contain"
            unoptimized
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </div>
    </motion.div>
  )
}

export default page
