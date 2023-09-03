import Image from "next/image";

import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectItem from "./ProjectItem";
import { projectTypes, technologies } from "./tags";
import Transitioner from "./Transitioner";
import BlurOverlay from "./BlurOverlay";

export default function Home() {
  const projects = [
    {
      name: "CryoGen",
      displayImage:
        "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
      tagline: "A sample project.",
      projectType: projectTypes.Systems,
      technologies: Object.values(technologies).slice(10),
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
  ];

  return (
    <>
      <BlurOverlay />
      <Transitioner />
      <div className="fixed top-0 w-full h-full opacity-80 z-[-30]">
        <Image
          src="/sky.png"
          priority
          fill
          className="object-fill w-full"
          alt="Aqua"
        />
      </div>

      <Navbar />
      <Hero />

      <div className="flex justify-center px-8 mb-8">
        <div className="flex justify-center flex-wrap gap-y-6 gap-x-6 max-w-[100rem]">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.name}
              // @ts-expect-error
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-8 -tracking-wider">
        Made with ❤️ in Berkeley, CA
      </div>
    </>
  );
}
