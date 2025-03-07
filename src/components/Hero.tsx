'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircles from './BackgroundCircles';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi,',
      "I'm a Frontend Developer",
      "I'm a Full-Stack Developer",
      "I'm a DevOps Engineer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <img
        src="https://media.licdn.com/dms/image/v2/C5603AQGMyfEgrNRjdg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1617777157650?e=1744848000&v=beta&t=Aa-emmZV0R2MTMl3d0fO361GfuhFW9CQMt6jrkxo3wI"
        alt="hero"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[10px]">
          Arjan Timmer
        </h2>
        <h1 className="text-3xl lg:text-6xl text-white font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <motion.button
              whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.9 }}
              className="heroButton"
            >
              About
            </motion.button>
          </Link>
          <Link href="#experience">
            <motion.button
              whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.9 }}
              className="heroButton"
            >
              Experience
            </motion.button>
          </Link>
          <Link href="#skills">
            <motion.button
              whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.9 }}
              className="heroButton"
            >
              Skills
            </motion.button>
          </Link>
          <Link href="projects">
            <motion.button
              whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.9 }}
              className="heroButton"
            >
              Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
