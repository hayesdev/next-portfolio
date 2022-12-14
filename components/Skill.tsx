import React from "react";
import { motion } from "framer-motion";

type Props = {
  // Optional prop for animation
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="../react.png"
        // grayscale effect on hover
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in"
      />
    </div>
  );
}

export default Skill;
