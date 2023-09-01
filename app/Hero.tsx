import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import GradientText from "./GradientText";
import { FaArrowDown } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const isLarge = useMediaQuery({
    query: "(min-width: 700px)",
  });

  return (
    <MouseParallaxContainer>
      <div className="flex absolute top-0 justify-center items-center w-screen h-80 oveflow-visible">
        <MouseParallaxChild factorX={-0.02} factorY={0.05}>
          <div className="relative left-[52rem] opacity-70 w-48 h-1">
            <Image
              src="/blur.webp"
              layout="fill"
              objectFit="cover"
              alt=""
              className="overflow-visible"
            />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.02} factorY={-0.05}>
          <div className="relative left-[-10rem] top-[15rem] opacity-70 w-40 h-1">
            <Image
              src="/blur2.png"
              layout="fill"
              objectFit="cover"
              alt=""
              className="overflow-visible"
            />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.02} factorY={0.05}>
          <div className="relative right-[29rem] top-[2rem] opacity-70 w-60 h-1">
            <Image
              src="/blur3.png"
              layout="fill"
              objectFit="cover"
              alt=""
              className="overflow-visible"
            />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={-0.02} factorY={-0.05}>
          <div className="relative right-[50rem] top-[11rem] opacity-70 w-60 h-1">
            <Image
              src="/blur4.png"
              layout="fill"
              objectFit="cover"
              alt=""
              className="overflow-visible"
            />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.08} factorY={-0.05}>
          <div className="relative left-[4rem] top-[13rem] opacity-70 w-60 h-1">
            <Image
              src="/blur5.png"
              layout="fill"
              objectFit="cover"
              alt=""
              className="overflow-visible"
            />
          </div>
        </MouseParallaxChild>
      </div>
      <MouseParallaxChild factorX={0.01} factorY={0.03}>
        <div className="flex flex-col items-center mt-32 mb-16">
          <div className="p-10 rounded-2xl text-center bg-white shadow-lg z-30">
            <div className="text-[2rem] font-semibold relative z-10">
              Hey! I&apos;m
            </div>
            {isLarge ? (
              <GradientText
                text="Anish Shanbhag" // 🛆∩ISI┤
                uncoloredText="."
                className="text-7xl font-bold -tracking-wider"
              />
            ) : (
              <>
                <GradientText
                  text="Anish" // 🛆∩ISI┤
                  className="text-5xl font-bold -tracking-wider"
                />
                <GradientText
                  text="Shanbhag" // 🛆∩ISI┤
                  uncoloredText="."
                  className="text-5xl font-bold -tracking-wider"
                />
              </>
            )}
            <div className="relative top-3 text-gray-400 text-lg font-semibold">
              I love building cool things with software 🚀
            </div>
          </div>
        </div>
      </MouseParallaxChild>
      <MouseParallaxChild factorX={-0.01} factorY={-0.03}>
        <div className="flex justify-center mt-6 mb-12">
          <div className="hover:scale-110 transition">
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={15}
              // perspective={500}
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
