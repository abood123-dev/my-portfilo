"use client";
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';
const Staireffect = () => {
    const pathname=usePathname();
  return (
    <AnimatePresence mode='wait'>
    <div key={pathname} className='w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
      <div className='flex w-full h-full' >
        <Stairs/>
      </div>
    </div>
    </AnimatePresence>
    
  )
}

export default Staireffect
