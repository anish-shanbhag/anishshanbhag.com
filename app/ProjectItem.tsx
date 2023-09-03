"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";
import { useAtom, useAtomValue } from "jotai";

import { Project } from "./projects";
import {
  OPEN_ANIMATION_DURATION,
  OPEN_ANIMATION_DURATION_CLASS,
} from "./constants";
import styles from "./scrollbar.module.css";
import { activeProjectAtom, isTransitioningAtom } from "./state";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const [activeProject, setActiveProject] = useAtom(activeProjectAtom);
  const isTransitioning = useAtomValue(isTransitioningAtom);

  const [isActive, setIsActive] = useState(
    project.name === activeProject?.name,
  );
  const [fixedX, setFixedX] = useState(-1);
  const [fixedY, setFixedY] = useState(-1);
  const [fixedWidth, setFixedWidth] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [enableTransition, setEnableTransition] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && project.name !== activeProject?.name) {
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
      setTimeout(() => {
        setShowScrollbar(false);
      }, OPEN_ANIMATION_DURATION / 2);
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
      setTimeout(() => setShowScrollbar(true), OPEN_ANIMATION_DURATION / 2);
    }
  }, [isActive, project, activeProject]);

  useEffect(() => {
    if (isActive && !isOpen && !enableTransition) {
      setTimeout(() => {
        setEnableTransition(true);
        setIsOpen(true);
      }, 0);
    }
  }, [isActive, isOpen, enableTransition]);

  const cardZIndex = isActive
    ? 2000
    : !isTransitioning && activeProject === null
    ? 500 - index
    : -20;

  const description = useRef<HTMLDivElement>(null);

  const [multiColumn, setMultiColumn] = useState(true);
  const mediaQuery = useMediaQuery({
    query: "(min-width: 750px)",
  });
  useEffect(() => {
    setMultiColumn(mediaQuery);
  }, [mediaQuery]);

  const isCurrentProject = activeProject?.name === project.name;

  return (
    <div className="w-80 h-[17rem] relative">
      <OutsideClickHandler
        onOutsideClick={() => {
          if (project.name === activeProject?.name) {
            window.history.back();
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
          onClick={() => {
            if (activeProject?.name !== project.name) {
              setActiveProject(project);
              window.history.pushState(
                { isProject: true },
                "Project: " + project.name,
              );
            }
          }}
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
              }`}
              style={{
                width: isActive
                  ? isOpen
                    ? "min(calc(100vw - 2rem), 61rem)"
                    : fixedWidth
                  : "100%",
              }}
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={15}
                tiltAngleXManual={isActive ? 0 : null}
                tiltAngleYManual={isActive ? 0 : null}
                glareEnable
                glareMaxOpacity={1}
                transitionSpeed={OPEN_ANIMATION_DURATION}
                className={`bg-white rounded-md shadow-lg overflow-hidden transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
                  activeProject?.name === project.name
                    ? "bg-opacity-100 shadow-2xl"
                    : "bg-opacity-60 hover:shadow-2xl"
                }`}
              >
                <div
                  className={`p-3 transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
                    isCurrentProject && "md:p-6 md:pr-1"
                  }`}
                >
                  <div
                    className={`${
                      isActive ? "w-[1000rem]" : "w-[18.5rem]"
                    } overflow-hidden`}
                  >
                    <div
                      className={`${
                        isCurrentProject ? "h-10 sm:h-[3rem] md:h-16" : "h-0"
                      } transition-all ${OPEN_ANIMATION_DURATION_CLASS} transition`}
                    >
                      {isActive && (
                        <div className="flex flex-row items-center gap-1.5 font-bold">
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
                      )}
                    </div>
                  </div>
                  <div
                    className={`${styles.scrollable} overflow-x-hidden ${
                      !showScrollbar && "overflow-y-hidden"
                    } max-h-[calc(100vh-12rem)] transition-all ${OPEN_ANIMATION_DURATION_CLASS}`}
                  >
                    <div className="flex flex-row items-start overflow-hidden">
                      <div className={`${!multiColumn && "w-full"}`}>
                        <div
                          className={`relative aspect-[2/1] ${
                            isCurrentProject
                              ? "w-full min-[750px]:w-[30rem] lg:w-[40rem]"
                              : "w-[18.5rem]"
                          } transition-all ${OPEN_ANIMATION_DURATION_CLASS}`}
                        >
                          {project.displayImage.endsWith(".mp4") ? (
                            <video
                              loop
                              autoPlay
                              // controls
                              muted
                              className="object-cover rounded-md mr-4"
                            >
                              <source
                                src={project.displayImage}
                                type="video/mp4"
                              />
                            </video>
                          ) : (
                            <Image
                              fill
                              src={project.displayImage}
                              alt={project.name}
                              priority={index < 5}
                              className="object-cover rounded-md mr-4"
                            />
                          )}
                        </div>
                        <div
                          className={`flex flex-col gap-2 mt-2 ${
                            isCurrentProject ? "h-0" : "h-[5.75rem]"
                          } transition-all ${OPEN_ANIMATION_DURATION_CLASS} overflow-hidden`}
                        >
                          <div className="font-bold text-2xl -tracking-wider transition-all group-hover:text-blue-500">
                            {project.name}
                          </div>
                          <div className="flex flex-row gap-[0.28rem]">
                            {project.projectType && (
                              <div
                                className="px-2 py-[0.06rem] border-[1.5px] rounded-md text-xs font-bold flex justify-center items-center"
                                style={{
                                  borderColor: project.projectType.color,
                                  color: project.projectType.color,
                                }}
                              >
                                {project.projectType.name}
                              </div>
                            )}
                            {project.technologies?.map((technology) => (
                              <div
                                key={technology.name}
                                className="flex justify-center items-center"
                              >
                                {typeof technology.icon === "string" ? (
                                  <Image
                                    src={technology.icon}
                                    alt={technology.name}
                                    width={18}
                                    height={18}
                                  />
                                ) : (
                                  technology.icon
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="text-gray-400">{project.tagline}</div>
                        </div>
                      </div>
                      {isActive && (
                        <div className="grow pr-1 text-sm w-0 whitespace-nowrap">
                          <div className="pl-4">
                            {multiColumn && (
                              <div className="relative w-full">
                                <div className="absolute w-full overflow-hidden">
                                  <ProjectFeatures project={project} />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`relative transition-all overflow-hidden ${OPEN_ANIMATION_DURATION_CLASS}`}
                      style={{
                        height: isCurrentProject
                          ? description.current?.clientHeight + "px"
                          : "0px",
                      }}
                    >
                      {isActive && (
                        <div
                          ref={description}
                          className="absolute w-[min(calc(100vw-5rem),57rem)] overflow-hidden"
                        >
                          {!multiColumn && (
                            <ProjectFeatures project={project} />
                          )}
                          {project.longDescription}
                        </div>
                      )}
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
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="select-none font-bold cursor-pointer hover:scale-95 active:scale-[85%] duration-300 w-full inline-block transition-all bg-teal-400 rounded-md py-2 text-white"
          >
            <div className="flex justify-center items-center gap-1 w-full overflow-hidden">
              <FaLink />
              Check It Out
            </div>
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            className="select-none font-bold cursor-pointer hover:scale-95 active:scale-[85%] w-full inline-block transition bg-black rounded-md py-2 text-white"
          >
            <div className="flex justify-center items-center gap-1 w-full overflow-hidden">
              <BsGithub />
              View on GitHub
            </div>
          </a>
        )}
      </div>
      <div className="text-xl -tracking-wider mt-4 mb-1 font-bold">
        Tech Stack
      </div>
      <div className="flex flex-wrap gap-1 w-full lg:w-[16.75rem] mb-2">
        {project.technologies?.map((technology) => (
          <div
            key={technology.name}
            className="flex items-center justify-center p-1.5 rounded-md overflow-hidden"
            style={{
              background: technology.backgroundColor,
            }}
          >
            <div className="flex flex-row gap-2 items-center text-white font-normal text-xs">
              <div className="relative bg-white rounded-sm w-[22px] h-[22px] flex justify-center items-center">
                {typeof technology.icon === "string" ? (
                  <Image
                    src={technology.icon}
                    alt={technology.name}
                    width={22}
                    height={22}
                    className="p-[0.2rem]"
                  />
                ) : (
                  technology.icon
                )}
              </div>

              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
