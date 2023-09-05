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
        <a href="https://scrollycoding-preview-anish-shanbhag.vercel.app/posts/dotted-curve">
          this one about creating a cool-looking design
        </a>
        , all while watching your local code change in real-time as the author
        explains each step. Blog authors can even highlight snippets of code
        that tie into their explanations and insights, making it easier than
        ever to understand how the author’s written ideas connect with your own
        project. <br /> <br />
        Check out my <a href="/projects/AutoBlog.pdf">pitch deck</a> for this
        project, presented at a UC Berkeley SCET startup competition!
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
        <a href="https://en.wikipedia.org/wiki/Mancala">Mancala</a> is one of
        the world&apos;s oldest board games and has a storied history dating
        back over 1,300 years. Despite this, there has been relatively little
        research into AI systems that can effectively play the strategy-based
        game. <br /> <br />
        I&apos;ve been playing Mancala for as long as I can remember, and wanted
        to see if I could create a worthy AI-based opponent. I began to
        investigate effective ML methods for training an optimal player; this
        project is the result of that effort: a neural network-based approach
        which is trained via two unsupervised algorithms, deep Q learning and
        neuroevolution (a genetic algorithm), resulting in a pretty smart system
        that achieves a 98% winrate. I still haven&apos;t beat it to this day 😅
        Check out my{" "}
        <a href="/projects/mancala-research-paper.pdf">research paper</a> to
        learn more!
      </div>
    ),
  },
  // TODO: {
  //   name: "Minecraft API",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
  {
    name: "Nexus Clash",
    displayImage: "/projects/nexus.mp4",
    tagline: "Build and defend in a vibrant 2D world.",
    projectType: projectTypes.Game,
    technologies: [
      technologies.Unity,
      technologies.CSharp,
      technologies.SQL,
      technologies.AWS,
    ],
    link: "/projects/nexus.mp4",
    longDescription: (
      <div>
        In this action-packed game where MOBA meets tower defense, you&apos;ll
        find yourself immersed in a world of 2D battles illuminated by vibrant
        and radiant characters. There&apos;s limitless ways to craft and expand
        your base as you work with your team to engage in strategic combat and
        outsmart your opponents. <br /> <br />
        Enemies in Nexus Clash have custom-built AI targeting and behavior
        systems, making sure players are always on their toes. Online play is
        also possible thanks to Unity&apos;s Photon networking engine, which I
        used to design a low-latency systems to ensure that gameplay is fluid.
        <br /> <br />
        All of the visual effects and art were designed and implemented from
        scratch by me! It was super fun bringing this world to life with
        particle simulations and glowing sprites.
      </div>
    ),
  },
  {
    name: "BlendCanvas",
    displayImage: "/projects/blendcanvas.png",
    tagline: "Create graphical shaders with JS.",
    projectType: projectTypes.Systems,
    technologies: [
      technologies.Vue,
      technologies.Firebase,
      technologies.CPlusPlus,
      technologies.TypeScript,
      technologies.Node,
    ],
    link: "https://canvas-vuetify.web.app/",
    githubLink: "https://github.com/anish-shanbhag/blendcanvas",
    longDescription: (
      <div>
        BlendCanvas is a new JavaScript-esque programming language which is used
        to write compute and fragment shaders that are optimized to run on the
        GPU. This enables web and game developers to easily create complex
        graphics even if they&apos;re unfamiliar with GLSL, which is the
        low-level, often hard-to-understand language that you&apos;d normally
        use to write these shaders. BlendCanvas is nearly identical to
        JavaScript with a few extra features to make writing GPU code easier,
        and seamlessly compiles to GLSL for full interoperability with the
        larger shader ecosystem. <br />
        <br />
        Along with writing a full parser and compiler for the language itself,
        I&apos;ve also created a showcase platform where people can share their
        shaders and edit them in the browser without the need to download any
        additional software. All shaders are stored persistently using Firebase
        storage and authentication, so your creations will be available forever!
      </div>
    ),
  },
  {
    name: "Optimal Conflict Partitions",
    displayImage: "/projects/cs170.png",
    tagline: "A novel graph partitioning algorithm.",
    projectType: projectTypes.Systems,
    technologies: [
      technologies.Python,
      technologies.NumPy,
      technologies.CPlusPlus,
    ],
    link: "https://docs.google.com/document/d/1BGn-1j73AAbWVxJKVFoJSmg48x3sQfZHzVKMjVL8qEM/edit?usp=sharing",
    githubLink: "https://github.com/anish-shanbhag/cs170-project",
    longDescription: (
      <div>
        Graph partitioning is often an NP-hard problem, meaning that it's
        computationally extremely hard to find the optimal solution. In this
        project, my team researched and developed a highly efficient algorithm
        for one problem in this domain: determining the optimal way to divide
        people into teams so that the teams are even, while also placing
        individuals who like each other on the same team. <br />
        <br />
        This problem might seem intuitively straightforward but it quickly
        became clear that even for a small number of individuals, the possible
        search space was enormous: over 10^30 combinations! We initially
        experimented in Python with basic optimization approaches like KMeans
        and various greedy approaches, but these weren't quite sufficient.
        <br /> <br />
        After quite a bit of investigation, we landed on an approach that
        combines two highly effective algorithms. The first is a formulation of
        the graph partitioning problem as an{" "}
        <a href="https://en.wikipedia.org/wiki/Integer_programming">
          integer linear program
        </a>
        , which we implemented using the{" "}
        <a href="https://www.gurobi.com/">Gurobi</a> optimization engine. We
        found that this approach was guaranteed to give us the optimal team
        partition due to the precision of our formulation, but the limitation
        was that solving for the optimum often took multiple hours, or even
        longer depending on the difficulty of the specific input. <br />
        <br />
        To get around this, we used another type of algorithm which is much
        faster at the cost of a bit of accuracy: simulated annealing. After
        creating an initial implementation in Python and verifying its
        effectiveness, we rewrote the optimizer in C++ and incorporated numerous
        optimizations like the use of SIMD instructions and loop unrolling. This
        allowed us to complete billions of steps of simulated annealing each
        second. We combined this with the ILP formulation by initializing the
        linear program with the solutions found via simulated annealing, then
        optimizing them even further with Gurobi. <br />
        <br />
        We used this algorithm as part of our solution for the Fall 2022 CS 170
        project competition, and we received 2nd place out of a class of 600+
        for finding some of the most optimal solutions!
      </div>
    ),
  },
  {
    name: "CPU Data Analysis",
    displayImage: "/projects/cpu-analysis.png",
    tagline: "Uncovering trends in consumer CPUs.",
    projectType: projectTypes.ML,
    technologies: [
      technologies.Python,
      technologies.NumPy,
      technologies.TypeScript,
    ],
    link: "https://github.com/anish-shanbhag/pc-parts",
    githubLink: "https://github.com/anish-shanbhag/pc-parts",
    longDescription: (
      <div>
        In this data analysis report, we investigated trends in pricing and
        performance metrics for 3400+ consumer CPUs released in the last few
        decades. After retrieving, cleaning, and analyzing over 300k data points
        gathered from online benchmarking sites UserBenchmark and Passmark, we
        were able to gain insight into how CPUs have evolved over time. <br />
        <br />
        Some of our main insights included the breakdown of Moore's law, the
        shift to multi-core CPUs, and the fluctuations in market share between
        Intel and AMD. The most interesting discovery, however, was that online
        benchmarking site UserBenchmark was actually biased in favor of Intel
        CPUs! We found that PassMark was a much better predictor of actual CPU
        performance, meaning consumers could be easily misled by UserBenchmark's
        CPU rankings.
      </div>
    ),
  },
  {
    name: "Quantum Valentine",
    displayImage: "/projects/quantum.png",
    tagline: "Nothin' but ❤️ for quantum computers.",
    projectType: projectTypes.Systems,
    technologies: [technologies.Python, technologies.NumPy, technologies.AWS],
    link: "https://github.com/anish-shanbhag/microsoft-ionq-challenge/blob/main/A%20Quantum%20Valentine%E2%80%99s%20Day.pdf",
    githubLink: "https://github.com/anish-shanbhag/microsoft-ionq-challenge",
    longDescription: (
      <div>
        There are only 8 days left until Valentine's Day and you have no date.
        Can you muster up the courage and charisma to win over your crush's
        heart before it's too late, or will you end up without a date for this
        special Quantum Valentine's Day?! <br /> <br />
        This fun little adventure combines the best of dating and gaming with
        the help of classical and quantum computers. Throuh a series of puzzles
        and challenges, the player must use quantum logic gates to align
        themselves with their crush, or be left without a date! Each turn
        involves selecting a quantum unitary gate (Pauli, Hadamard, SWAP, etc.)
        to move your 2-qubit state closer to that of your partner's, eventually
        culminating in the circuit being run in a <b>
          real quantum computer
        </b>{" "}
        to check if your crush truly is a good match for you! <br /> <br />
        I also trained a neural network opponent via deep reinforcement learning
        that plays the game against you, making for a fun race against the clock
        as you compete for your Valentine's attention. <br />
        <br /> This was our team's project for Microsoft's 2023 iQuHACK Quantum
        Hackathon, where our submission was accepted to run on Microsoft's
        actual quantum computers - it was a great experience learning how to
        build on top of this cutting-edge hardware!
      </div>
    ),
  },
  {
    name: "DeFolder",
    displayImage:
      "https://user-images.githubusercontent.com/52852612/131261346-c478cc8f-f884-4b53-8254-4d87595000d5.mp4",
    tagline: "The modern file explorer for Windows.",
    projectType: projectTypes.Systems,
    technologies: [
      technologies.React,
      technologies.TypeScript,
      technologies.Electron,
      technologies.Node,
    ],
    githubLink: "https://github.com/anish-shanbhag/defolder",
    longDescription: (
      <div>
        DeFolder is a modern file explorer for Windows filled with unique
        features like custom icons/animations, blazing-fast folder size
        calculation, and instant file searching. Increase your productivity by
        keeping all your important files just a few keystrokes away, and
        organize everything important to you in a clean, elegant interface.{" "}
        <br /> <br />I used the Framer Motion animation library and some React
        performance optimizations to create fluid animations as you navigate to
        new files. DeFolder also use an inter-process communication system to
        interface with a Node.js backend, creating a highly performant
        experience for folder size calculation and directory navigation.
      </div>
    ),
  },
  {
    name: "Incremental Pathfinding",
    displayImage: "/projects/incremental-pathfinding.mp4",
    tagline: "Improving travel in complex terrain.",
    projectType: projectTypes.Systems,
    technologies: [technologies.Python, technologies.NumPy],
    githubLink: "https://github.com/anish-shanbhag/incremental-pathfinding",
    longDescription: (
      <div>
        In our complex world of mountainous terrain, a simple pathfinding
        algorithm between two points isn't always sufficient. Whether it's a
        hiker navigating steep slopes or a truck maneuvering through challenging
        terrain, there's always certain regions that are preferable to traverse
        than others. This demonstrates the need for a new type of pathfinding
        algorithm which is specifically designed to take weighted preference of
        these regions into account.
        <br />
        <br />
        My approach to solve this tricky problem is an incremental pathfinding
        algorithm which progressively optimizes and refines an initial route. A*
        pathfinding is used to generate a low-resolution path between the
        starting point and target, and the grid size is progressively decreased
        for each subsequent run of A* to find a more detailed path. This
        approach drastically increases performance by reducing the potential
        search space, while still providing results that are nearly identical to
        a brute-force A* search.
      </div>
    ),
  },
  // {
  //   name: "Image Split",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
  {
    name: "Hive Online",
    displayImage:
      "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
    tagline: "A sample project.",
  },
  // {
  //   name: "Snackpass",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
  // {
  //   name: "A star pathfinding",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
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
  // {
  //   name: "Gorilla Spotlight",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
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
  // {
  //   name: "Musical Understanding",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
];
