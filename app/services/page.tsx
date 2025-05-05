"use client";
import React from 'react'
import {easeInOut, motion} from "framer-motion";
const page = () => {
  const services=
  [
    {
      num:'01',
      title:'Responsive Web Development',
      desc:"I build fully responsive and user-friendly web applications that look great and work smoothly on all devices—from desktops to smartphones. Using Tailwind CSS, I ensure consistent design and performance across screen sizes."  
    },
    {
      num:'02',
      title:'Modern Frontend Development with React & TypeScript',
      desc:'I develop scalable, maintainable, and high-performance user interfaces using React and TypeScript. My code is clean, well-typed, and built for long-term growth with modern development standards.'
    },
    {
      num:'03',
      title:"API Integration & Data Handling",
      desc:'I connect web applications to external APIs, fetch and display data efficiently, and handle errors gracefully. Whether its REST or JSON-based APIs, I ensure smooth communication between the frontend and backend.'
    },
    {
      num:'04',
      title:"State Management with Redux",
      desc:"I use Redux to manage application state, especially for larger apps that require consistent data flow. With Redux Toolkit, I organize and maintain state in a way that's easy to scale and debug."
    }
  ]
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.4,delay:2.0,ease:easeInOut}}}>
    <div className='grid grid-cols-2 gap-[30px] items-center ml-[100px] mt-[50px] mb-10 text-white'>
    {services.map((service,index)=>
      {
        return(
         <div key={index} className='w-[450px]'>
               <div className='text-5xl font-extrabold text-outline text-transparent'>{service.num}</div>
               <div className='font-bold text-[35px]'>{service.title}</div>
               <div>{service.desc}</div>
               <div className='border-b border-white/20 w-full p-[10px]'></div>              
         </div>
        )
      })}  
    </div>
    </motion.div>
    </>
  )
}

export default page
