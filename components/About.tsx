"use client";
import React from "react";
import Image from "next/image";
import Picture from "../images/picture.png";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  const MotionImage = motion(Image);

  return (
    <div className="flex flex-col relative min-h-screen md:h-screen text-center md:justify-center md:text-left max-w-7xl px-1 pt-36 md:pt-0 mx-auto items-center overflow-hidden xl:overflow-visible space-y-8">
      <h2 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl -mr-5">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center space-y-8">
        <MotionImage
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.6,
          }}
          src={Picture}
          alt="Picture of the author"
          className="flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[540px]"
        />

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
          className="space-y-8 px-4 md:px-10"
        >
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h3>
          <p className="text-base xl:text-xl">
            Hi! My name is Łukasz Kołosowski and I'm from Poland, live in
            Wrocław. My passion in life is cycling trips, especially long ones.
            I'm also in love in programming, and I like to go to the gym from
            time to time. Mountain trips are also my way to spend free time.
          </p>
          <p className="text-base xl:text-xl">
            I love taking on new challenges. I keep trying new things. I want to
            use my creativity and commitment to work in a team with
            professionals who inspire me and have a passion for creating
            innovative and aesthetic projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
