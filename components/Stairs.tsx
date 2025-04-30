'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    y: 0,
  },
  animate: {
    y: '-100%',
  },
  exit: {
    y: ['-100%', '0%'],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  const totalSteps = 6;
  const stepWidth = 100 / totalSteps;

  return (
    <div className="relative w-full h-full">
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="absolute h-full bg-white"
          style={{
            width: `${stepWidth}%`,
            left: `${index * stepWidth}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Stairs;


