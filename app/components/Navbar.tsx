"use client";

import { useScrollDirection } from "react-use-scroll-direction";
import { useScrollYPosition } from "react-use-scroll-position";
import { MouseEventHandler, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

import GradientMask from "./GradientMask";

export default function Navbar() {
  const { isScrollingDown, isScrollingUp } = useScrollDirection();
  const scrollY = useScrollYPosition();
  const [isShown, setIsShown] = useState(true);
  const router = useRouter();

  if (isScrollingDown && isShown && scrollY > 80) {
    setIsShown(false);
  } else if (isScrollingUp && !isShown) {
    setIsShown(true);
  }

  return (
    <div
      className={`flex justify-center sticky z-[600] transition-all duration-[800ms] ${
        isShown ? "top-8" : "top-[-8rem]"
      }`}
    >
      <nav className="flex justify-between items-center max-w-[70rem] w-full mx-4 xs:mx-12 sm:mx-20 md:mx-32 h-16 bg-white rounded-full bg-opacity-50 backdrop-blur-sm shadow-2xl">
        <div
          className="flex justify-center items-center w-16 h-16 bg-blue-500 cursor-pointer hover:scale-[118%] active:scale-100 transition-all duration-300 rounded-full shadow-[rgba(0,_0,_0,_0.2)_0px_12px_38px,_rgba(0,_0,_0,_0.2)_0px_8px_12px]"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full overflow-hidden">
            <GradientMask
              className="relative right-3 top-[0.2rem] ml-4 -mt-4 text-[2.5rem] font-black -tracking-wider select-none rounded-full"
              rounded
            >
              <Image
                src="/images/rounded-triangle.png"
                width={40}
                height={40}
                className="inline-block"
                alt=""
              />
            </GradientMask>
          </div>
        </div>
        <div className="h-16 bg-white border-[0.25rem] border-blue-500 rounded-full shadow-[rgba(0,_0,_0,_0.2)_0px_12px_38px,_rgba(0,_0,_0,_0.1)_0px_8px_12px]">
          <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
            <LinkButton
              isFirst
              icon={<BsLinkedin size={20} color="#0072b1" />}
              href="https://linkedin.com/in/anish-shanbhag"
            />
            <LinkButton
              className="bg-gray-500"
              href="https://github.com/anish-shanbhag"
              icon={<BsGithub size={20} color="white" />}
            />
            <LinkButton
              className="bg-teal-200 shadow-2xl"
              icon={<MdEmail size={20} color="white" />}
              onClick={() => {
                router.push(
                  "mail" +
                    "to" +
                    ":anish" +
                    String.fromCharCode(46) +
                    "shanbhag@ber" +
                    "keley.edu",
                );
              }}
            />
            <LinkButton
              isLast
              href="/anish-shanbhag-resume.pdf"
              className="bg-blue-500"
              icon={<IoIosPaper size={20} color="white" />}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

interface LinkButtonProps {
  isFirst?: boolean;
  isLast?: boolean;
  icon: React.ReactElement;
  href?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  className?: React.ComponentProps<"div">["className"];
}

function LinkButton({
  isFirst,
  isLast,
  icon,
  href,
  onClick,
  className,
}: LinkButtonProps) {
  return (
    <span className="active:brightness-75 h-full" onClick={onClick}>
      <a
        className={`flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.8)] w-[3.5rem] hover:w-[6rem] transition-all duration-300 h-full cursor-pointer ${
          isFirst && "rounded-l-full"
        } ${isLast && "rounded-r-full"} ${className}`}
        href={href}
      >
        {icon}
      </a>
    </span>
  );
}
