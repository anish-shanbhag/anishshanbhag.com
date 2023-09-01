"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import GradientText from "./GradientText";
import Hero from "./Hero";
import Navbar from "./Navbar";
import {
  OPEN_ANIMATION_DURATION,
  OPEN_ANIMATION_DURATION_CLASS,
} from "./constants";
import ProjectItem from "./ProjectItem";

export interface Project {
  name: string;
  displayImage: string;
  tagline: string;
}

function useScrollbarWidth() {
  const didCompute = useRef(false);
  const widthRef = useRef(0);

  if (didCompute.current) return widthRef.current;

  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode!.removeChild(outer);

  didCompute.current = true;
  widthRef.current = scrollbarWidth;

  return scrollbarWidth;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([
    {
      name: "CryoGen",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Cracking Mancala with ML",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Minecraft API",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Nexus",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "BlendCanvas",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Partitioning Algorithm",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "PC Parts Data Analysis",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Quantum Computing",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "DeFolder",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Incremental Pathfinding",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Image Split",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Hive Online",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Snackpass",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "A star pathfinding",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Convex",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Next.js template",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "POET/PORT",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "iPhone Profiling",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Slime Mold",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Gorilla Spotlight",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "react-styled-input",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "fast-folder-size",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Setify",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
    {
      name: "Musical Understanding",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
    },
  ]);

  const [oldActiveProject, setOldActiveProject] = useState<Project | null>(
    null
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollbarWidth = useScrollbarWidth();

  if (oldActiveProject !== activeProject) {
    setOldActiveProject(activeProject);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, OPEN_ANIMATION_DURATION);
    if (activeProject) {
      document.body.style.marginRight = scrollbarWidth + "px";
      document.body.classList.add("overflow-y-hidden");
    } else {
      setTimeout(() => {
        document.body.style.marginRight = "0px";
        document.body.classList.remove("overflow-y-hidden");
      }, OPEN_ANIMATION_DURATION);
    }
  }

  return (
    <>
      <div
        className={`fixed top-0 w-screen h-screen transition ${OPEN_ANIMATION_DURATION_CLASS} ${
          activeProject !== null ? "opacity-100 z-[900]" : "opacity-0"
        } backdrop-blur-sm`}
      ></div>

      <div className={`fixed top-0 w-full h-full opacity-80 z-[-30]`}>
        <Image src="/sky.png" layout="fill" objectFit="fill" alt="Aqua" />
      </div>

      <Navbar />

      <Hero />

      <div className="flex justify-center mt-6 px-8">
        <div className="flex justify-center flex-wrap gap-y-6 gap-x-6 max-w-[100rem]">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.name}
              project={project}
              index={index}
              activeProject={activeProject}
              isTransitioning={isTransitioning}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>
      </div>
    </>
  );
}
