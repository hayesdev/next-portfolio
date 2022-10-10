import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCirlces({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center z-0"
    >
      {/* use square brackets for JIT compiler */}
      <div className="absolute border border-[#333333] rounded-full h-[220px] w-[220px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#E7AB39] rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCirlces;
