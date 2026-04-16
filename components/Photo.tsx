"use client";
import React from 'react'
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { reverse } from 'dns';
const Photo = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: easeInOut, duration: 0.4, delay: 2 } }}
      >
        {/* Circle */}
        <motion.svg
          className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
          fill="transparent"
          viewBox="0 0 586 586"
        >
          <motion.circle
            cx="293"
            cy="293"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
            }}
          />
        </motion.svg>

        {/* Image */}
        <Image
          src="/ChatGPT Image Apr 16, 2026, 06_46_31 AM.png"
          alt=""
          width={350}
          height={350}
          className="w-[180px] h-[180px] md:w-[350px] md:h-[350px] rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Photo;