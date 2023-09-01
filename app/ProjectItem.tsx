import Image from "next/image";
import { useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink, FaReact } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { Project } from "./page";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";
import {
  OPEN_ANIMATION_DURATION,
  OPEN_ANIMATION_DURATION_CLASS,
} from "./constants";
import styles from "./scrollbar.module.css";

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
  const [showScrollbar, setShowScrollbar] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (isActive && project.name !== activeProject?.name) {
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
    setTimeout(() => {
      setShowScrollbar(false);
      setIsActive(false);
      setEnableTransition(false);
    }, OPEN_ANIMATION_DURATION);
  } else if (!isActive && project.name === activeProject?.name) {
    setIsActive(true);
    const rect = cardRef.current!.getBoundingClientRect();
    setFixedX(rect.x);
    setFixedY(rect.y);
    setFixedWidth(rect.width);
    setTimeout(() => setShowScrollbar(true), OPEN_ANIMATION_DURATION);
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

  const description = useRef<HTMLDivElement>(null);

  const multiColumn = useMediaQuery({
    query: "(min-width: 750px)",
  });

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
                glareEnable={false}
                // glareMaxOpacity={0}
                transitionSpeed={OPEN_ANIMATION_DURATION}
                className={`bg-white rounded-md shadow-lg transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
                  activeProject?.name === project.name
                    ? "bg-opacity-100 shadow-2xl"
                    : "bg-opacity-60 hover:shadow-2xl"
                }`}
              >
                <div
                  className={`p-3 pr-2 transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
                    activeProject === project && "md:p-6 md:pr-1"
                  }`}
                >
                  <div
                    className={`${
                      isActive ? "w-[1000rem]" : "w-[18.5rem]"
                    } overflow-hidden`}
                  >
                    <div
                      className={`${
                        activeProject === project
                          ? "h-10 sm:h-[3rem] md:h-16"
                          : "h-0"
                      } transition-all ${OPEN_ANIMATION_DURATION_CLASS} transition`}
                    >
                      <div
                        className={`flex flex-row items-center gap-2 font-bold`}
                      >
                        {multiColumn && (
                          <div
                            color="white"
                            className="bg-blue-500 text-white text-sm -tracking-wide px-1 py-0.5 rounded-md"
                          >
                            Project
                          </div>
                        )}
                        <div className="-tracking-wider text-2xl sm:text-4xl md:text-5xl">
                          {project.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.scrollable} overflow-x-hidden ${
                      !showScrollbar && "overflow-y-hidden"
                    } ${
                      activeProject === project
                        ? "[scrollbar-gutter:stable]"
                        : "[scrollbar-gutter:auto]"
                      // TODO: max-h below is causing the card view to become cut off
                    } max-h-[calc(100vh-12rem)] transition-all ${OPEN_ANIMATION_DURATION_CLASS}`}
                  >
                    <div className="flex flex-row items-start">
                      <div className={`${!multiColumn && "w-full"}`}>
                        <div
                          className={`relative aspect-[2/1] ${
                            activeProject === project
                              ? "w-full min-[750px]:w-[30rem] lg:w-[40rem]"
                              : "w-[18.5rem]"
                          } transition-all ${OPEN_ANIMATION_DURATION_CLASS}`}
                        >
                          <Image
                            layout="fill"
                            objectFit="cover"
                            src={project.displayImage}
                            alt={project.name}
                            className={`rounded-md mr-4`}
                          />
                        </div>
                        <div
                          className={`flex flex-col gap-2 mt-2 ${
                            activeProject === project ? "h-0" : "h-[5.75rem]"
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
                        className={`grow pr-1 text-sm w-0 whitespace-nowrap`}
                      >
                        <div className="pl-4">
                          {multiColumn && (
                            <div className="relative w-full">
                              <div
                                className={`absolute w-full overflow-hidden`}
                              >
                                <ProjectFeatures project={project} />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`relative transition-all overflow-hidden ${OPEN_ANIMATION_DURATION_CLASS}`}
                      style={{
                        height:
                          activeProject === project
                            ? description.current?.clientHeight + "px"
                            : "0px",
                      }}
                    >
                      <div
                        ref={description}
                        className="absolute w-full lg:w-[52rem] overflow-hidden"
                      >
                        {!multiColumn && <ProjectFeatures project={project} />}
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        habitasse, magna mattis enim tincidunt risus non congue
                        posuere sagittis, sociosqu cursus bibendum penatibus in
                        sociis molestie. At ante vel in tincidunt etiam habitant
                        litora nullam aenean duis quisque, pellentesque et
                        tortor facilisis ultrices semper interdum porta
                        sociosqu. Curabitur elit facilisi netus malesuada arcu
                        per, ad ultrices nam est sapien, pharetra taciti aenean
                        elementum augue. Porttitor litora torquent sit egestas
                        cras hac nec viverra, velit etiam semper eget vestibulum
                        gravida nam, curae at suscipit pulvinar tempus odio
                        senectus ac, nascetur montes vivamus commodo accumsan
                        lectus. Scelerisque turpis est praesent viverra sem
                        cubilia pretium mi laoreet a suspendisse per cras,
                        phasellus curae imperdiet tempor integer dignissim
                        habitant facilisi ad etiam ipsum dictumst. Semper
                        potenti tincidunt convallis enim vivamus sapien erat
                        purus cum porttitor at, eu primis arcu natoque vehicula
                        facilisi aptent a massa fusce, ante ullamcorper feugiat
                        montes eget dapibus volutpat luctus habitant phasellus.
                        Laoreet dolor auctor hac nullam sodales praesent aenean
                        felis, erat eu accumsan nulla integer placerat montes
                        mus interdum, dignissim venenatis nam dui ipsum lorem
                        commodo. Sed gravida erat elementum vel pellentesque
                        libero suscipit natoque non, arcu nascetur montes purus
                        eleifend odio netus class vivamus, in parturient cursus
                        tristique placerat mollis donec malesuada. Libero porta
                        a convallis magna duis netus ad laoreet, pharetra
                        pellentesque interdum varius enim habitasse lectus
                        eleifend adipiscing, tempor congue erat feugiat amet
                        orci curae. Auctor etiam neque viverra ultricies
                        dignissim placerat vehicula, eget fringilla torquent
                        varius sem hendrerit ultrices, mattis pretium gravida
                        erat ipsum tortor. Semper sociosqu tempus nunc
                        sollicitudin pulvinar at magna consectetur laoreet eget
                        ac lorem tortor, erat aptent viverra donec facilisis
                        litora dui luctus penatibus dis vel. Scelerisque
                        ullamcorper volutpat
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

function ProjectFeatures({ project }: { project: Project }) {
  return (
    <div>
      <div className="flex flex-col gap-2 w-full">
        <div className="text-gray-400">{project.tagline}</div>
        <a className="font-bold cursor-pointer hover:scale-95 active:scale-[85%] duration-300 w-full inline-block transition-all bg-teal-400 rounded-md py-2 text-white">
          <div className="flex justify-center items-center gap-1 w-full overflow-hidden">
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
      <div className="flex flex-wrap gap-1 w-full lg:w-[13.75rem] mb-2">
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
            France a|||||||||||
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-500 p-2 rounded-md overflow-hidden">
          <div className="flex flex-row gap-1 items-center text-white font-normal text-xs">
            <FaReact size={16} />
            Framer|||||
          </div>
        </div>
      </div>
    </div>
  );
}
