"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 100,
        scale: 0,
      }}
      animate={{
        opacity: [1, 0.8, 0.4, 1],
        scale: [0, 1, 3, 1],
        y: [100, 0, -200, 0],
      }}
      transition={{
        duration: 3.5,
        delay: 0.25,
      }}
      className="relative flex justify-center items-center -top-2"
    >
      <div className="absolute border border-[#666666] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute  border border-papa-orange rounded-full h-[700px] w-[700px] mt-52 opacity-10 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[900px] w-[900px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
