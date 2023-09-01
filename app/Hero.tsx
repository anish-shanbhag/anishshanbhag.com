import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import GradientText from "./GradientText";

export default function Hero() {
  return (
    <MouseParallaxContainer>
      <div className="flex absolute top-0 justify-center items-center w-screen h-80 oveflow-visible">
        {/* <div className=""> */}
        <MouseParallaxChild factorX={-0.02} factorY={0.05}>
          <div className="relative left-[60rem] opacity-70 w-60 h-1">
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
          <div className="relative left-[30rem] opacity-70 w-60 h-1">
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
          <div className="relative right-[30rem] opacity-70 w-60 h-1">
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
          <div className="relative right-[50rem] top-48 opacity-70 w-60 h-1">
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
          <div className="relative left-[0rem] top-48 opacity-70 w-60 h-1">
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
        <div className="flex justify-center my-32">
          <div className="p-10 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-[2rem] font-semibold relative z-10">
              Hey! I&apos;m
            </div>
            <GradientText
              text="Anish Shanbhag" // 🛆∩ISI┤
              uncoloredText="."
              className="text-7xl font-bold -tracking-wider"
            />
            <div className="relative top-3 text-gray-400 text-lg font-semibold">
              Welcome to my site!
            </div>
          </div>
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
