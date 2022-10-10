import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCirlces";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Gregory Hayes",
      "Guy-who-loves-rpgs.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <div className="relative h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="top-8 rounded-full"
        src="/../public/gorski-rpg.png"
        width={128}
        height={128}
        alt="rpg pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase tracking-[15px] pb-2 text-gray-500">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:6xl font-semi-bold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#E7AB39" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
