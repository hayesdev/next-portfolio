import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl min-w-[375px] mx-auto px-10 justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="../gorski-rpg.png"
        className="mt-32 -mb-12 md:mb-0 flex-shrink-0 w-48 h-48 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-6 mt-10 px-0 py-4 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          about me...
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          aperiam ipsam illum sit rerum dolorum quos sint, ipsa temporibus odio
          laudantium, eos cum tenetur fugiat molestiae cupiditate ex dolore
          provident! Iusto nam nemo fugit provident adipisci consectetur
          reprehenderit itaque nobis modi dolorem, eligendi eaque accusamus rem
          cumque amet sit fugiat.
        </p>
      </div>
    </div>
  );
}

export default About;
