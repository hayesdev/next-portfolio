import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gorski from "../public/gorski-rpg.png";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 p-10 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center"
        src="../gorski-rpg.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">CEO of HayesDev</h4>
        <p className="font-bold text-2xl mt-1">HayesDev</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          <Image className="rounded-full" src={gorski} width={16} height={16} />
          <Image className="rounded-full" src={gorski} width={16} height={16} />
          <Image className="rounded-full" src={gorski} width={16} height={16} />
          <Image className="rounded-full" src={gorski} width={16} height={16} />
        </div>
        <p className="py-4 uppercase text-gray-300">Started... -Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
