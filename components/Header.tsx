//header.tsx
import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-200">      
    <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.2
      }}
      className="flex flex-row space-x-4 md:space-x-8">
        {/* Social Icons */}
        <SocialIcon 
        url="https://github.com/Youngboypimpin" 
        fgColor="gray"
        bgColor="transparent"
        />
        
        <SocialIcon 
        url="https://github.com/Youngboypimpin" 
        fgColor="gray"
        bgColor="transparent"
        />
         
        <SocialIcon 
        url="https://github.com/Youngboypimpin" 
        fgColor="gray"
        bgColor="transparent"
        />
      </motion.div>


      <motion.div 
      initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.2
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
        className="cursor-pointer "
        network="email"
        fgColor="gray"
        bgColor="transparent"
        
        />
        <p className="uppercase text-sm text-gray-400">Get in Touch</p>
      </motion.div>
    </header>
  );
}
