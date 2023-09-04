import { ReactNode } from "react";

import { ProjectType, Technology, projectTypes, technologies } from "./tags";

export interface Project {
  name: string;
  displayImage: string;
  additionalImages?: string[];
  projectType?: ProjectType;
  technologies: Technology[];
  tagline: string;
  link?: string;
  githubLink?: string;
  longDescription: ReactNode;
}

export const projects: Project[] = [
  {
    name: "AutoBlog",
    displayImage: "/projects/autoblog.mp4",
    tagline: "Reimagining the way we learn to code.",
    projectType: projectTypes.Web,
    technologies: [
      technologies.React,
      technologies.Next,
      technologies.TypeScript,
      technologies.Rust,
      technologies.Node,
      technologies.SQL,
      technologies.Docker,
    ],
    link: "https://scrollycoding-preview-anish-shanbhag.vercel.app/posts/dotted-curve",
    githubLink: "https://github.com/anish-shanbhag/autoblog",
    longDescription: (
      <div>
        Learn about programming in a whole new way with AutoBlog. <br /> <br />
        Today’s blogging sites just aren’t made for sharing code. Tired of
        reading about the way your folder structure should look or trying to
        decide whether your terminal output matches the author’s? We have tools
        for those things - they’re called code editors. Why not learn to code in
        the same place you write it? <br /> <br />
        With AutoBlog, you can connect you own codebase in one click and scroll
        through tutorial articles like{" "}
        <a
          href="https://scrollycoding-preview-anish-shanbhag.vercel.app/posts/dotted-curve"
          className="text-blue-500 underline"
        >
          this one about creating a cool-looking design
        </a>
        , all while watching your local code change in real-time as the author
        explains each step. Blog authors can even highlight snippets of code
        that tie into their explanations and insights, making it easier than
        ever to understand how the author’s written ideas connect with your own
        project. <br /> <br />
        Check out my{" "}
        <a href="/AutoBlog.pdf" className="text-blue-500 underline">
          pitch deck
        </a>{" "}
        for this project, presented at a UC Berkeley SCET startup competition!
      </div>
    ),
  },
  {
    name: "Neural Nets for Mancala",
    displayImage: "/projects/mancala.png",
    tagline: "Mastering the age-old game using ML.",
    projectType: projectTypes.ML,
    technologies: [
      technologies.Python,
      technologies.PyTorch,
      technologies.NumPy,
    ],
    link: "/projects/mancala-research-paper.pdf",
    githubLink: "https://github.com/anish-shanbhag/mancala-neural-networks",
    longDescription: (
      <div>
        <a
          href="https://en.wikipedia.org/wiki/Mancala"
          className="text-blue-500 underline"
        >
          Mancala
        </a>{" "}
        is one of the world&apos;s oldest board games and has a rich and storied
        history dating back over 1,300 years. Despite this, there has been
        relatively little research into AI systems that can effectively play the
        strategy-based game. <br /> <br />
        Since I've been playing mancala for as long as I can remember, I began
        to investigate effective ML methods for training an optimal player. This
        project is the result of that effort: a neural network-based approach
        trained via two unsupervised algorithms, deep Q learning and
        neuroevolution (a genetic algorithm), resulting in a pretty smart system
        that achieves a 98% winrate. Check out my research paper to learn more!
      </div>
    ),
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
