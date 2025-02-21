'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = object;

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 1],
      }}
      transition={{ duration: 10.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#525252] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#525252] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#525252] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#525252] rounded-full h-[700px] w-[700px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
