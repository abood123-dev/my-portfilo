"use client";
import React from 'react'
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { reverse } from 'dns';
const Photo = () => {
  return (
    <div>
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{ease:easeInOut,duration:0.4,delay:2}}}>
      <Image src="/IMG_٢٠٢٥٠٣٣١_١٦٢٠٠٥.jpg" alt='' width={350} height={350} className='relative md:w-[350px] md:h-[350px] w-[180px] h-[180px] border-none rounded-full  mix-blend-lighten object-cover md:mr-0 -mr-5'/>
      <motion.svg className='md:w-[450px] md:h-[500px] w-[250px] h-[300px] absolute md:bottom-6 md:right-12 top-[70px] right-[59px] '
      fill='transparent'
      viewBox='0 0 586 586'
      xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle cx='253' cy='253' r='250' stroke='#00ff99'
        strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'
        initial={{strokeDasharray:"24 10 0 0"}}
        animate={{
          strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
          rotate:[120,360],
        }}
        transition={{
          repeat:Infinity,
          repeatType:"reverse",
          duration:20, 
        }}
        />
      </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo
