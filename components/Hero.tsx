"use client";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import ProfilePic from "../images/profile-pic.png";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "",
      "Hello, my name is Łukasz!",
      "I loves road cycling.",
      "But love to code more :)",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="min-h-screen md:h-screen flex flex-col space-y-8 items-center justify-center text-center -mt-[90px] overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfilePic}
        alt="Profile picture of the author"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="z-20"
      >
        <h1 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[16px] -mr-2 sm:-mr-4">
          Frontend Developer
        </h1>
        <p className="text-2xl sm:text-4xl md:text-6xl font-semibold">
          <span className="font-mono">{text}</span>
          <svg
            width="20"
            height="75"
            className="ml-[4px] mr-[4px] sm:ml-[8px] sm:mr-[8px] inline-block animate-blinking h-[24px] sm:h-[36px] md:h-[60px] align-middle sm:align-bottom fill-papa-orange/50 w-auto"
          >
            <rect width="20" height="75" />
          </svg>
        </p>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
