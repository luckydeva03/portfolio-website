import React from "react";
import { skills } from "@/data/content/home";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative pt-16 border-t border-fun-pink-darker">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        I'm still learning,
        <br />
        but here are the tools I've explored so far.
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
          alt=""
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
          alt=""
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
          alt=""
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
          alt=""
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-4 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-16 mx-auto flex items-center flex-col justify-center cursor-pointer group transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <div className="relative p-2 rounded-lg transition-all duration-300 group-hover:bg-fun-pink-darker group-hover:shadow-lg group-hover:shadow-fun-pink/20 w-12 h-12 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  style={item.style} 
                  className="w-8 h-8 transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-md"
                  alt={item.title}
                />
              </div>
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80 transition-all duration-300 group-hover:text-fun-pink group-hover:opacity-100 group-hover:scale-105">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;