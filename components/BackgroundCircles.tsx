//backgroundcircle.tsx
import React from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

type Props = {}

function BackgroundCircles({}: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5,
    }}

    className='relative flex justify-center items-center p-0'
    >
      {isMobile ? (
        // Smaller circles for mobile screens
        <>
          <div className='absolute border border-[#333333]-500 rounded-full h-[80px] w-[80px] mt-20 animate-ping' />
          <div className='absolute border border-[#333333]-500 rounded-full h-[200px] w-[200px] mt-20 ' />
        </>
      ) : (
        // Larger circles for larger screens
        <>
          <div className='absolute border border-[#333333]-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
          <div className='absolute border border-[#333333]-500 rounded-full h-[500px] w-[500px] mt-52 ' />
          <div className='absolute border border-green-500 rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
        </>
      )}
    </motion.div>
  )
}

export default BackgroundCircles
