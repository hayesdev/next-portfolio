import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] min-w-[375px] mx-auto xl:px-10 xl:space-y-0 justify-center items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-300 text-sm">
        Hover over for more information
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
