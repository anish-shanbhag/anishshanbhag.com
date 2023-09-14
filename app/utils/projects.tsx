import { ReactNode } from "react";

import { ProjectType, Technology, projectTypes, technologies } from "./tags";

export interface Project {
  name: string;
  displayImage: string;
  additionalImages?: string[];
  projectTypes: ProjectType[];
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
    projectTypes: [projectTypes.Web, projectTypes.Systems],
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
    name: "POET",
    displayImage: "/projects/poet.png",
    tagline: "Bringing LLMs to the edge.",
    projectTypes: [projectTypes.ML, projectTypes.Systems],
    technologies: [
      technologies.PyTorch,
      technologies.Python,
      technologies.NumPy,
      technologies.AWS,
      technologies.Docker,
    ],
    link: "https://poet.cs.berkeley.edu/",
    githubLink: "https://github.com/ShishirPatil/poet",
    longDescription: (
      <div>
        As machine learning models become more and more capable, one question
        has remained up in the air: how can we ensure that personalized models
        maintain user privacy while still delivering great performance? <br />
        <br />
        POET has the solution: it enables the training of state-of-the-art
        memory-hungry ML models like GPT and Stable Diffusion on smartphones and
        other edge devices. POET (Private Optimal Energy Training) utilizes the
        twin techniques of integrated tensor rematerialization, and
        paging-in/out of secondary storage to optimize models for training with
        limited memory. By formulating the problem of edge training as a mixed
        integer linear program (MILP), our system ensures that the generated
        training schedules are provably optimal! <br /> <br />
        Even LLMs like GPT-4 or Llama-70B have seemed out of reach of tiny
        devices like iPhones, but with POET, we now have a way to bring both
        model inference and training to the edge. This means that transformers
        and LLMs can be personalized to user-specific use cases without
        sacrificing data privacy - a win-win for both model creators and users!
        <br /> <br />
        POET is fully open-source and available to use now - check out the
        GitHub for instructions on how to use the solver, read{" "}
        <a href="https://arxiv.org/abs/2207.07697">the paper</a> to learn more
        about the ILP formulation, or head over to the{" "}
        <a href="https://colab.research.google.com/drive/1iup_edJd9zB1tfVBHXLmkWOT5yoSmXzz">
          Google Colab
        </a>{" "}
        for a live demo!
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
    projectTypes: [projectTypes.Game],
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
    name: "DeFolder",
    displayImage: "/projects/defolder.mp4",
    tagline: "The modern file explorer for Windows.",
    projectTypes: [projectTypes.Systems, projectTypes.Web],
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
    name: "Physarum Simulations",
    displayImage: "/projects/physarum.mp4",
    tagline: "GPU-accelerated cellular automata.",
    projectTypes: [projectTypes.Systems, projectTypes.Algorithms],
    technologies: [technologies.Python, technologies.NumPy],
    link: "/projects/physarum.pdf",
    githubLink: "https://github.com/anish-shanbhag/physarum-simulations",
    longDescription: (
      <div>
        <i>Physarum polycephalum</i>, more commonly known as slime mold, is a
        single-celled organism with simple behavior but surprising emergent
        abilities. They can be simulated using a relatively simple rule:
        represent the mold as millions of tiny particles which sense and move
        towards other particles around them. Though this behavior is pretty
        intuitive, it actually leads to highly complex behavior: the ability to
        pathfind around obstacles, explore new areas in a web-like structure,
        and even simulate boolean logic gates in specific environmental
        conditions!
        <br /> <br />
        This simulation captures the emergent behavior of <i>Physarum</i>{" "}
        through colorful GPU-accelerated particle simulations. By utilizing the
        performance from Nvidia&apos;s CUDA engine, I was able to simulate the
        mold using tens of millions of particles, yielding a highly detailed
        overview of its pathfinding abilities and other characteristics.
      </div>
    ),
  },
  {
    name: "Hive Online",
    displayImage: "/projects/hive.mp4",
    tagline: "Protect the Queen Bee at all costs.",
    projectTypes: [projectTypes.Web, projectTypes.Game],
    technologies: [
      technologies.Vue,
      technologies.TypeScript,
      technologies.Node,
    ],
    link: "https://anish-shanbhag.github.io/hive-online/",
    githubLink: "https://github.com/anish-shanbhag/hive-online",
    longDescription: (
      <div>
        <a href="https://www.gen42.com/games/hive">Hive</a> is an abstract
        strategy board game like chess, but with a twist: the board is an
        infinite hexagonal grid, and the pieces are all insects with unique
        powers! This game is <i>crawling</i> with so many fun possibilities and
        strategies, yet I found that there was no online version to play with
        your friends - so I set out to fix that. <br /> <br />
        Hive Online is an online multiplayer version of Hive powered by
        peer-to-peer networking, meaning that you can play with anyone, anytime,
        and anywhere. Challenge your friends, and protect the Queen Bee at all
        costs!
      </div>
    ),
  },
  {
    name: "Neural Nets for Mancala",
    displayImage: "/projects/mancala.png",
    tagline: "Mastering the age-old game using ML.",
    projectTypes: [projectTypes.ML],
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
  {
    name: "Incremental Pathfinding",
    displayImage: "/projects/incremental-pathfinding.mp4",
    tagline: "Improving travel in complex terrain.",
    projectTypes: [projectTypes.Algorithms],
    technologies: [technologies.Python, technologies.NumPy],
    githubLink: "https://github.com/anish-shanbhag/incremental-pathfinding",
    longDescription: (
      <div>
        In our complex world of mountainous terrain, a simple pathfinding
        algorithm between two points isn&apos;t always sufficient. Whether
        it&apos;s a hiker navigating steep slopes or a truck maneuvering through
        challenging terrain, there&apos;s always certain regions that are
        preferable to traverse than others. This demonstrates the need for a new
        type of pathfinding algorithm which is specifically designed to take
        weighted preference of these regions into account.
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

  {
    name: "BlendCanvas",
    displayImage: "/projects/blendcanvas.png",
    tagline: "Create graphical shaders with JS.",
    projectTypes: [projectTypes.Web, projectTypes.Systems],
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
    projectTypes: [projectTypes.Algorithms],
    technologies: [
      technologies.Python,
      technologies.NumPy,
      technologies.CPlusPlus,
    ],
    link: "https://docs.google.com/document/d/1BGn-1j73AAbWVxJKVFoJSmg48x3sQfZHzVKMjVL8qEM/edit?usp=sharing",
    githubLink: "https://github.com/anish-shanbhag/cs170-project",
    longDescription: (
      <div>
        Graph partitioning is often an NP-hard problem, meaning that it&apos;s
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
        and various greedy approaches, but these weren&apos;t quite sufficient.
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
    projectTypes: [projectTypes.ML],
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
        Some of our main insights included the breakdown of Moore&apos;s law,
        the shift to multi-core CPUs, and the fluctuations in market share
        between Intel and AMD. The most interesting discovery, however, was that
        online benchmarking site UserBenchmark was actually biased in favor of
        Intel CPUs! We found that PassMark was a much better predictor of actual
        CPU performance, meaning consumers could be easily misled by
        UserBenchmark&apos;s CPU rankings.
      </div>
    ),
  },
  {
    name: "Quantum Valentine",
    displayImage: "/projects/quantum.png",
    tagline: "Nothin' but ❤️ for quantum computers.",
    projectTypes: [projectTypes.Systems],
    technologies: [technologies.Python, technologies.NumPy, technologies.AWS],
    link: "https://github.com/anish-shanbhag/microsoft-ionq-challenge/blob/main/A%20Quantum%20Valentine%E2%80%99s%20Day.pdf",
    githubLink: "https://github.com/anish-shanbhag/microsoft-ionq-challenge",
    longDescription: (
      <div>
        There are only 8 days left until Valentine&apos;s Day and you have no
        date. Can you muster up the courage and charisma to win over your
        crush&apos;s heart before it&apos;s too late, or will you end up without
        a date for this special Quantum Valentine&apos;s Day?! <br /> <br />
        This fun little adventure combines the best of dating and gaming with
        the help of classical and quantum computers. Throuh a series of puzzles
        and challenges, the player must use quantum logic gates to align
        themselves with their crush, or be left without a date! Each turn
        involves selecting a quantum unitary gate (Pauli, Hadamard, SWAP, etc.)
        to move your 2-qubit state closer to that of your partner&apos;s,
        eventually culminating in the circuit being run in a{" "}
        <b>real quantum computer</b> to check if your crush truly is a good
        match for you! <br /> <br />
        I also trained a neural network opponent via deep reinforcement learning
        that plays the game against you, making for a fun race against the clock
        as you compete for your Valentine&apos;s attention. <br />
        <br /> This was our team&apos;s project for Microsoft&apos;s 2023
        iQuHACK Quantum Hackathon, where our submission was accepted to run on
        Microsoft&apos;s actual quantum computers - it was a great experience
        learning how to build on top of this cutting-edge hardware!
      </div>
    ),
  },
  {
    name: "Setify",
    displayImage: "/projects/setify.mp4",
    tagline: "Mix and match your Spotify playlists.",
    projectTypes: [projectTypes.Web],
    technologies: [
      technologies.React,
      technologies.TypeScript,
      technologies.Next,
      technologies.AWS,
      technologies.Node,
    ],
    // TODO: link: "",
    // TODO: githubLink: "",
    longDescription: (
      <div>
        Ever wanted to create a mash-up of two banger Spotify playlists, like
        getting the best of your pop and electronic music in one session? Or
        maybe you&apos;re in love with your friend&apos;s road trip playlist,
        but you only want to hear songs which are new to you? <br />
        <br />
        If that sounds like something you&apos;d love: <b>Setify</b> is here to
        help! It&apos;s a new app which integrates directly with your Spotify
        playlists and lets you mix and match them using the power of{" "}
        <a href="https://www.skillsyouneed.com/num/set-theory.html">
          Set Theory
        </a>
        ! Easily combine multiple playlists into one, pick out out songs which
        you and your friends all love, or create curated selections of your
        ever-growing list of favorites. <br /> <br />A beta version of Setify is
        coming soon - stay tuned!
      </div>
    ),
  },
  {
    name: "Collaborative Recruiting",
    displayImage: "/projects/convex.mp4",
    tagline: "Realtime-synced application portal.",
    projectTypes: [projectTypes.Web],
    technologies: [
      technologies.React,
      technologies.TypeScript,
      technologies.Next,
      technologies.AWS,
      technologies.Node,
    ],
    link: "https://stack.convex.dev/building-an-application-portal",
    githubLink: "https://github.com/web-at-berkeley/convex",
    longDescription: (
      <div>
        Growing an organization or team is an inherently collaborative process,
        but current tools for managing often lack the realtime features needed
        for effectively working together. In this project, my student
        organization{" "}
        <a href="http://webatberkeley.org/">Web Development at Berkeley</a>{" "}
        teamed up with <a href="https://www.convex.dev/">Convex</a> to build an
        application portal an application portal that unifies the process of
        applying to student organizations on one convenient website - including
        unique features like automatically-saved student applications and
        powerful collaborative tools for organization admins to view application
        submissions. By building the app with Convex, we were able to represent
        applicant data as realtime by default, meaning tha reviewers can always
        see updates live as they come in. <br /> <br />
        If you&apos;re interested in a deep dive of how we were able to
        implement this complex data model, check out our{" "}
        <a href="https://stack.convex.dev/building-an-application-portal">
          blog post on Convex&apos;s site
        </a>{" "}
        to learn more about how my team engineered this project!
      </div>
    ),
  },
  // TODO: {
  //   name: "Next.js template",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
  {
    name: "CoreML Profiler for iPhone",
    displayImage: "/projects/coreml.png",
    tagline: "Performance tooling for ML on iOS.",
    projectTypes: [projectTypes.ML, projectTypes.Systems],
    technologies: [
      technologies.Swift,
      technologies.Python,
      technologies.PyTorch,
      technologies.NumPy,
    ],
    githubLink:
      "https://github.com/poet-projects/iphone-profiling/blob/profiling-automation/Profiling/profile.py",
    longDescription: (
      <div>
        As smartphone GPUs become increasingly powerful, running inference and
        training for machine learning models on users&apos; own devices is
        becoming more and more effective. Because of this trend, it&apos;s more
        important than ever to understand how neural networks and other models
        are performing layer-by-layer on target hardware. <br />
        <br />
        In order to aid in this process, I&apos;ve created a framework for
        dynamically converting any PyTorch-based model into a Swift profiling
        script which rigorously measures the compute and memory performance of
        each execution layer in the neural network. The profiling plan is
        custom-created for each model by traversing its PyTorch computation
        graph and automatically generating CoreML models that measure each
        specific layer type&apos;s performance. <br />
        <br />
        The resulting script can be easily run on any device running iOS or
        macOS and analyzed via{" "}
        <a href="https://developer.apple.com/videos/play/wwdc2022/10027/">
          Apple&apos;s CoreML Instrument
        </a>
        , enabling model developers to understand and eliminate bottlenecks at a
        more granular scale than ever before.
      </div>
    ),
  },
  // {
  //   name: "react-styled-input",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "Declarative, granular styling within HTML inputs.",
  //   projectTypes: [projectTypes.Web],
  //   technologies: [
  //     technologies.React,
  //     technologies.TypeScript,
  //     technologies.Node,
  //   ],
  //   link: "",
  //   githubLink: "",
  //   longDescription: (
  //     <div>

  //     </div>
  //   ),
  // },
  // {
  //   name: "fast-folder-size",
  //   displayImage:
  //     "https://fastly.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
  //   tagline: "A sample project.",
  // },
];

// TODO: unused projects {
//   name: "Image Split",
// },
// {
//   name: "Snackpass",
// },
// {
//   name: "A star pathfinding",
// },
// {
//   name: "Gorilla Spotlight",
// },
// {
//   name: "Musical Understanding",
// },
// {
//   name: "Next Frame Prediction",
// },
// {
//   name: "Data Project with Michael",
// },
