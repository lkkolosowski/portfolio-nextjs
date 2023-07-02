"use client";
import React from "react";
import Image from "next/image";
import Picture from "../images/picture.png";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  const MotionImage = motion(Image);

  return (
    <div className="flex flex-col relative min-h-screen md:h-screen text-center md:justify-center md:text-left max-w-7xl px-1 pt-36 md:pt-0 mx-auto items-center overflow-hidden xl:overflow-visible space-y-8">
      <h2 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl -mr-5">
        Skills
      </h2>
      <div className="flex flex-col md:flex-row items-center space-y-8 w-1/2">
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="space-y-8 px-4 md:px-10 w-full md:w-1/2 mx-auto"
        >
          <img
            src="https://skillicons.dev/icons?i=git,js,ts,styledcomponents,nextjs,tailwind,vscode,react,css,html,redux,github&&perline=3"
            alt="skillset"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
