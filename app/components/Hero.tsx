"use client";

import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { FaArrowDown } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Blur from "../../public/images/blur.webp";
import Blur2 from "../../public/images/blur2.png";
import Blur3 from "../../public/images/blur3.png";
import Blur4 from "../../public/images/blur4.png";
import Blur5 from "../../public/images/blur5.png";

import GradientMask from "./GradientMask";

export default function Hero() {
  const projectsButton = useRef<HTMLDivElement>(null);
  const showBlurs = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  return (
    <MouseParallaxContainer>
      <div className="absolute top-0 justify-center items-center w-screen h-80 hidden min-[1200px]:flex">
        <MouseParallaxChild factorX={-0.02} factorY={0.05}>
          <Image
            src={Blur}
            width={192}
            priority={showBlurs}
            alt=""
            className="relative select-none left-[52rem] opacity-70 w-48 overflow-visible"
          />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.02} factorY={-0.05}>
          <Image
            src={Blur2}
            width={160}
            priority={showBlurs}
            alt=""
            className="relative select-none left-[-10rem] top-[15rem] opacity-70 w-40 object-cover overflow-visible"
          />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.02} factorY={0.05}>
          <Image
            src={Blur3}
            width={240}
            priority={showBlurs}
            alt=""
            className="relative select-none right-[29rem] top-[2rem] opacity-70 w-60 overflow-visible"
          />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={-0.02} factorY={-0.05}>
          <Image
            src={Blur4}
            width={240}
            priority={showBlurs}
            alt=""
            className="relative select-none right-[50rem] top-[11rem] opacity-70 w-60 overflow-visible"
          />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.08} factorY={-0.05}>
          <Image
            src={Blur5}
            width={240}
            priority={showBlurs}
            alt=""
            className="relative select-none left-[4rem] top-[13rem] opacity-70 w-60 overflow-visible"
          />
        </MouseParallaxChild>
      </div>
      <MouseParallaxChild factorX={0.01} factorY={0.03}>
        <div className="flex flex-col items-center mt-24 md:mt-32 mx-6 mb-10 md:mb-[4.5rem]">
          <div className="p-5 md:p-10 rounded-2xl text-center bg-white shadow-lg z-30">
            <div className="text-[1.4rem] md:text-[2rem] font-semibold relative z-10">
              Hey! I&apos;m
            </div>
            <GradientMask // 🛆∩ISI┤
              uncoloredText="."
              className="text-7xl font-bold -tracking-wider hidden min-[750px]:block"
            >
              Anish Shanbhag
            </GradientMask>
            <GradientMask className="text-5xl font-bold -tracking-wider min-[750px]:hidden">
              Anish
            </GradientMask>
            <GradientMask
              uncoloredText="."
              className="text-5xl font-bold -tracking-wider min-[750px]:hidden"
            >
              Shanbhag
            </GradientMask>
            <div className="mt-3 top-3 text-gray-400 text-lg font-semibold max-w-[40rem]">
              I love building cool things with software 🚀
            </div>
          </div>
        </div>
      </MouseParallaxChild>
      <MouseParallaxChild factorX={-0.01} factorY={-0.03}>
        <div
          ref={projectsButton}
          className="flex justify-center mt-6 mb-10 md:mt-8 md:mb-16"
        >
          <div
            className="hover:scale-110 transition"
            onClick={() =>
              window.scrollTo({
                top:
                  projectsButton.current!.getBoundingClientRect().top +
                  window.scrollY -
                  32,
                behavior: "smooth",
              })
            }
          >
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={15}
              className="cursor-pointer [transform-style:preserve-3d] bg-white py-3 px-6 font-bold rounded-full border-blue-500 border-4 shadow-2xl"
              glareEnable={false}
            >
              <div className="[transform:translateZ(20px)]">
                <FaArrowDown className="inline mr-2 animate-[wiggle_3s_ease-in-out_infinite] " />
                Check out my projects 🖥️
              </div>
            </Tilt>
          </div>
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
