import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCirlces";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Gregory Hayes",
      "Guy-who-loves-RPGs.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/../public/gorski-rpg.png"
        width={200}
        height={200}
        alt="rpg pic"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#E7AB39" />
      </h1>
    </div>
  );
}

export default Hero;
