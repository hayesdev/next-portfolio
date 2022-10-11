import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCirlces";
import Gorski from "../public/gorski-rpg.png";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Greg Hayes",
      "Guy-who-loves-rpgs.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2200,
  });
  return (
    <div className="relative h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="top-8 rounded-full"
        src={Gorski}
        width={128}
        height={128}
        alt="rpg pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase tracking-[15px] pb-2 text-gray-500">
          Software Engineer
        </h2>
        <h1 className="text-3xl md:text-5xl font-semi-bold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#E7AB39" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
