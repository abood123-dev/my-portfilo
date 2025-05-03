"use client";
import React from 'react'
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
const Photo = () => {
  return (
    <div>
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{ease:easeInOut,duration:0.4,delay:2}}}>
      <Image src="/IMG_٢٠٢٥٠٣٣١_١٦٢٠٠٥.jpg" alt='' width={350} height={350} className='md:w-[350px] md:h-[350px] w-[180px] h-[180px] border-none rounded-full  mix-blend-lighten object-cover md:mr-0 mr-2'/>
        </motion.div>
    </div>
  )
}

export default Photo
