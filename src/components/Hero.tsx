import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SpotifyButton from "./ui/spotify-button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-50" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[80vw]" fill="white" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hey there, Welcome ✨, Want to know about 
          </h2>
          <TextGenerateEffect
            words="A passionate programmer and a creative developer ?"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center flex gap-2 items-center dark:text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-thin ">
            Hii 👋, you can call me{" "}
            <span className="text-blue-300 font-bold font-sans text-3xl"> {" "}Anant</span>
          </p>
          <a href="#stacks">
            <SpotifyButton
              title="Know more"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
