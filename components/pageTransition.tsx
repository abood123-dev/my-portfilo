"use client";
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
const PageTransition = ({children}:any) => {
    const pathname=usePathname();
  return (
    <>
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            className='w-screen h-screen fixed bg-[#1c1c22] top-0 pointer-events-none'
            initial={{opacity:1}} animate={{opacity:0,transition:{delay:1,duration:0.4,ease:"easeInOut"}}}/>
            {children}
        </div>
        
    </AnimatePresence>
    </>
  )
}

export default PageTransition
