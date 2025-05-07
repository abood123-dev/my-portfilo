"use client";
import React, { useState } from 'react'
import {FaCss3,FaReact,FaJs,FaHtml5 } from 'react-icons/fa';
import {SiNextdotjs,SiTailwindcss,SiTypescript} from "react-icons/si";
import { Tooltip , TooltipContent,TooltipTrigger,TooltipProvider } from '@/components/ui/tooltip';
import { Tabs ,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {easeInOut, motion} from "framer-motion";
const page = () => {
  const [In,setin]=useState<number | null>(null);
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
    description:"Here are my skills:",
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
        <div className='flex md:flex-row flex-col justify-start items-start md:gap-[100px] gap-[200px] md:ml-20 ml-2 mt-36'>
        <TabsList defaultValue="about" >
               <div className='flex flex-col items-start gap-10 text-white'>
                   <div>    
                  <TabsTrigger value='about' className='bg-[#27272c] px-40 py-6  rounded-xl text-white border-none data-[state=active]:bg-[#00ff99] data-[state=active]:text-[#1c1c22]'>About me</TabsTrigger>
                   </div>
                   <div>                  
                  <TabsTrigger value='skills' className='bg-[#27272c] px-[170px]  py-6  rounded-xl text-white border-none data-[state=active]:bg-[#00ff99] data-[state=active]:text-[#1c1c22]'>Skills</TabsTrigger>
                   </div>
                   </div>
                </TabsList>
                <div className='-mt-[70px]'>
                <TabsContent value='about'>
                   <div className='mb-10 flex flex-col gap-7 items-start bg-[#27272c] rounded-xl px-5 py-9 md:w-[600px] w-[350px]'>
                       <div className='font-extrabold text-[30px] text-white'>{about.title}</div>
                       <div className='font-normal text-[15px] text-white'>{about.description}</div>
                       <div>
                          {about.Info.map((About,index)=>
                            {
                              return(
                                  <div key={index} className='flex flex-col gap-3 items-start '>
                                  <div className='text-[30px] text-white'>{About.Name}</div>
                                  <div className='text-[#00ff99] mb-3'>{About.Value}</div>
                                  </div>
                              )
                            })}

                       </div>
                    
                    </div> 
                </TabsContent>
                <TabsContent value='skills'>
                  <div className='text-white flex flex-col items-start gap-10 '>
                       <div className='font-extrabold text-[25px]'>{skills.title}</div>
                       <div className='font-normal text-[15px]'>{skills.description}</div>
                       <div className='grid grid-cols-4 gap-4'>{skills.Info.map((skill,index)=>
                        {
                          return(
                          <>
                          <div className='grid grid-cols-4  gap-[20px]'>
                          <TooltipProvider>
                           <Tooltip delayDuration={100}>
                             <TooltipTrigger className='group md:px-12 px-10 py-12  bg-[#27272c] rounded-lg flex justify-center items-center'>
                          <div className='text-4xl group-hover:text-[#00ff99] transition-all duration-300'>{skill.Icon} </div>
                             </TooltipTrigger>
                            <TooltipContent>
                              {skill.Name}  
                            </TooltipContent>
                          </Tooltip>  
                          </TooltipProvider>
                          </div>                      
                          </> 
                          )
                        })}</div>
                  
                  </div></TabsContent>
                </div>
        </div>    
        </Tabs>  


    </motion.div>
             
    
  )
}

export default page
