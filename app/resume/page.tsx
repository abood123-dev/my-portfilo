"use client";
import React from 'react'
import {FaCss3,FaReact,FaJs,FaHtml5 } from 'react-icons/fa';
import {SiNextdotjs,SiTailwindcss,SiTypescript} from "react-icons/si";
import { Tooltip , TooltipContent,TooltipTrigger,TooltipProvider } from '@/components/ui/tooltip';
import { Tabs ,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {easeInOut, motion} from "framer-motion";
const page = () => {
  const about={
  title:"About me",
  description:"Its me Abd Al-Fatah Al-Haj Ibrahim , I'm a fourth year  college student , from Syria Living in Damascus", 
  Info:[
  {
    Name:"Name",
    Value:"Abd Al-Fatah Al-Haj Ibrahim"
  },
  {
     Name:"Phone",
    Value:"+963 99 2960 766"
  },
  {
     Name:"Email",
    Value:"aboodhajibrahim6@gmail.com"
  },
  {
    Name:"Nationality",
   Value:"Syrian"
 },
 {
  Name:"Languages",
  Value:"Arabic,English"
}
  ]}
  
  const skills={
    title:"Skills",
    description:"Here are my skills",
    Info:[
      {
        Icon:<FaHtml5/>,
        Name:"Html5"
      },
      {
        Icon:<FaCss3/>,
        Name:"CSS"
      },
      {
        Icon:<FaJs/>,
        Name:"Javascript"
      },
      {
        Icon:<FaReact/>,
        Name:"React js"
      },
      {
        Icon:<SiNextdotjs/>,
        Name:"Next js"
      }, 
      {
        Icon:<SiTailwindcss/>,
        Name:"Tailwind css"
      },
      {
        Icon:<SiTypescript/>,
        Name:"Typescript"
      },
    ]
  }

  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{
      delay:2.4,ease:easeInOut,duration:0.4
    }}}>
      <Tabs defaultValue='about'>
        <div className='flex flex-row justify-center items-center mt-52'>
        <TabsList defaultValue="about" >
               <div className='flex flex-col items-center gap-5 text-white'>
                   <div>    
                  <TabsTrigger value='about' className='bg-[#1c1c22] px-14 py-4 rounded-full text-white'>About me</TabsTrigger>
                   </div>
                   <div>                  
                  <TabsTrigger value='skills' className='bg-[#1c1c22] px-14 py-4 rounded-full text-white'>Skills</TabsTrigger>
                   </div>
                   </div>
                </TabsList>
                <div>
                <TabsContent value='about'>About</TabsContent>
                <TabsContent value='skills'>Skills</TabsContent>
                </div>
        </div>    
        </Tabs>  


    </motion.div>
             
    
  )
}

export default page
