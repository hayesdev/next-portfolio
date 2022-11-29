import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import macJumbo from "../public/mac-jumbotron.png";

type Props = {};

function Projects({}: Props) {
  const projects = [
    { title: "Reddit Clone", id: 1 },
    { title: "Task Manager", id: 2 },
    { title: "Disney Plus Clone", id: 3 },
    { title: "Roomba Game", id: 4 },
  ];
  return (
    <div className="h-screen flex flex-col relative text-left md:flex-row max-w-full min-w-[375px] mx-auto justify-evenly items-center z-0 overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      {/* Projects */}
      <div className="relative w-full flex overflow-scroll-x overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, index) => (
          <div
            // Children in a list should have a unique key
            key={index}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-10 md:p-44 "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="../mac-jumbotron.png"
              alt="project image"
              className="w-[285px] h-[108px] md:w-[570px] md:h-[215px] mt-20 md:mt-0"
            />
            <div className="space-y-6 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {project.id} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                aut modi vero a quibusdam et iure mollitia aliquid illum, rerum
                sequi, tempore nobis maiores magni, illo minus fugit voluptatum
                distinctio eveniet voluptate ut dolorem placeat repellendus
                reprehenderit. Facere, vel necessitatibus!
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Background skew effect */}
      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
