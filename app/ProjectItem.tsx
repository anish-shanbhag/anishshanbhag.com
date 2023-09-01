import Image from "next/image";
import { useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink, FaReact } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { Project } from "./page";
import Tilt from "react-parallax-tilt";

import {
  OPEN_ANIMATION_DURATION,
  OPEN_ANIMATION_DURATION_CLASS,
} from "./constants";

interface ProjectItemProps {
  project: Project;
  index: number;
  activeProject: Project | null;
  isTransitioning: boolean;
  setActiveProject: (project: Project | null) => void;
}

export default function ProjectItem({
  project,
  index,
  activeProject,
  isTransitioning,
  setActiveProject,
}: ProjectItemProps) {
  const [isActive, setIsActive] = useState(
    project.name === activeProject?.name
  );
  const [fixedX, setFixedX] = useState(-1);
  const [fixedY, setFixedY] = useState(-1);
  const [fixedWidth, setFixedWidth] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [enableTransition, setEnableTransition] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (isActive && project.name !== activeProject?.name) {
    setTimeout(() => setIsOpen(false), 10);
    setTimeout(() => {
      setIsActive(false);
      setEnableTransition(false);
    }, OPEN_ANIMATION_DURATION);
  } else if (!isActive && project.name === activeProject?.name) {
    setIsActive(true);
    const rect = cardRef.current!.getBoundingClientRect();
    setFixedX(rect.x);
    setFixedY(rect.y);
    setFixedWidth(rect.width);
  }

  if (isActive && !isOpen && !enableTransition) {
    setTimeout(() => {
      setEnableTransition(true);
      setIsOpen(true);
    }, 0);
  }

  const cardZIndex = isActive
    ? 2000
    : !isTransitioning && activeProject === null
    ? 500 - index
    : -20;

  return (
    <div className={`w-80 h-[17rem] relative`}>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (project.name === activeProject?.name) {
            setActiveProject(null);
          }
        }}
      >
        <div
          ref={cardRef}
          className={`${isActive ? "fixed" : "absolute"} ${
            enableTransition &&
            "transition-all " + OPEN_ANIMATION_DURATION_CLASS
          } group ${!isActive && "cursor-pointer"}`}
          style={{
            zIndex: cardZIndex,
            top: isActive ? (isOpen ? "50%" : fixedY) : 0,
            left: isActive ? (isOpen ? "50%" : fixedX) : 0,
            transform: isOpen ? "translate(-50%, -50%)" : "none",
            willChange: "contents",
          }}
          onClick={() => activeProject !== project && setActiveProject(project)}
        >
          <div
            className={`${
              !isActive && "hover:scale-110 active:scale-95"
            } transition`}
          >
            <div
              className={`${
                enableTransition &&
                "transition-all " + OPEN_ANIMATION_DURATION_CLASS
              } ${
                ""
                // enableTransition && activeProject === project
                //   ? "ease-[cubic-bezier(0.8,0,0.5,1)]"
                //   : "ease-[cubic-bezier(0.3,0.8,0.7,1)]"
              }`}
              style={{
                width: isActive
                  ? isOpen
                    ? "min(calc(100vw - 2rem), 58rem)"
                    : fixedWidth
                  : "100%",
              }}
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={15}
                tiltAngleXManual={isActive ? 0 : null}
                tiltAngleYManual={isActive ? 0 : null}
                glareEnable={true}
                glareMaxOpacity={1}
                transitionSpeed={OPEN_ANIMATION_DURATION}
                className={`bg-white overflow-hidden rounded-md shadow-lg transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
                  activeProject?.name === project.name
                    ? "bg-opacity-100 shadow-2xl"
                    : "bg-opacity-60 hover:shadow-2xl"
                }`}
              >
                <div
                  className={`p-3 transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
                    activeProject === project ? "h-[30rem] md:p-6" : "h-[17rem]"
                  }`}
                >
                  <div
                    className={`${
                      isActive ? "w-[1000rem]" : "w-[18.5rem]"
                    } overflow-hidden`}
                  >
                    <div
                      className={`${
                        activeProject === project ? "h-16" : "h-0"
                      } transition-all ${OPEN_ANIMATION_DURATION_CLASS} transition`}
                    >
                      <div
                        className={`flex flex-row items-center gap-2 font-bold`}
                      >
                        <div
                          color="white"
                          className="bg-blue-500 text-white text-sm -tracking-wide px-1 py-0.5 rounded-md"
                        >
                          Project
                        </div>
                        <div className="-tracking-wider text-2xl min-[600px]:text-4xl sm:text-5xl">
                          {project.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start">
                    <div>
                      <div
                        className={`relative aspect-[2/1] ${
                          activeProject === project
                            ? "w-[10rem] md:w-[40rem]"
                            : "w-[18.5rem]"
                        } transition-all ${OPEN_ANIMATION_DURATION_CLASS}`}
                      >
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src={project.displayImage}
                          alt={project.name}
                          className={`rounded-md mr-4 min-w-[60px] min-h-[60px]`}
                        />
                      </div>
                      <div
                        className={`flex flex-col gap-2 mt-2 w-[18.5rem] mb-2 ${
                          activeProject === project ? "h-0" : "h-[6rem]"
                        } transition-all ${OPEN_ANIMATION_DURATION_CLASS} overflow-hidden`}
                      >
                        <div className="font-bold text-2xl -tracking-wider transition-all group-hover:text-blue-500">
                          {project.name}
                        </div>
                        <div className="flex flex-row">
                          <div className="w-10 h-5 border-orange-600 border-[1.5px] rounded-md text-xs font-bold flex justify-center items-center text-orange-600">
                            ML
                          </div>
                        </div>
                        <div className="text-gray-400">{project.tagline}</div>
                      </div>
                    </div>
                    <div
                      className={`grow text-sm w-0 overflow-hidden whitespace-nowrap`}
                    >
                      <div className="pl-4">
                        <div className="relative w-[14rem] h-[99999px]">
                          <div className={`absolute top-0 left-0`}>
                            <div className="flex flex-col gap-2 w-full">
                              <div className="text-gray-400">
                                {project.tagline}
                              </div>
                              <a className="font-bold cursor-pointer hover:scale-95 active:scale-[85%] duration-300 w-full inline-block transition-all bg-teal-400 rounded-md py-2 text-white">
                                <div className="flex justify-center items-center gap-1 w-full">
                                  <FaLink />
                                  Check It Out
                                </div>
                              </a>
                              <a className="font-bold cursor-pointer hover:scale-95 active:scale-[85%] w-full inline-block transition bg-black rounded-md py-2 text-white">
                                <div className="flex justify-center items-center gap-1 w-full overflow-hidden">
                                  <BsGithub />
                                  View on GitHub
                                </div>
                              </a>
                            </div>
                            <div className="text-xl -tracking-wider mt-4 mb-1 font-bold">
                              Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <div className="flex items-center justify-center bg-blue-500 p-2 rounded-md overflow-hidden">
                                <div className="flex flex-row gap-1 items-center text-white font-normal text-xs">
                                  <FaReact size={16} />
                                  Framer Motion
                                </div>
                              </div>
                              <div className="flex items-center justify-center bg-blue-500 p-2 rounded-md overflow-hidden">
                                <div className="flex flex-row gap-1 items-center text-white font-normal text-xs">
                                  <FaReact size={16} />
                                  Framer Motionsd|
                                </div>
                              </div>
                              <div className="flex items-center justify-center bg-blue-500 p-2 rounded-md overflow-hidden">
                                <div className="flex flex-row gap-1 items-center text-white font-normal text-xs">
                                  <FaReact size={16} />
                                  France a
                                </div>
                              </div>
                              <div className="flex items-center justify-center bg-blue-500 p-2 rounded-md overflow-hidden">
                                <div className="flex flex-row gap-1 items-center text-white font-normal text-xs">
                                  <FaReact size={16} />
                                  Framer
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
