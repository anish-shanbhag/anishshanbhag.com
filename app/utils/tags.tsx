import { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

export interface ProjectType {
  name: string;
  color: string;
}

export const projectTypes = {
  ML: {
    name: "AI/ML",
    color: "#ea580c",
  },
  Web: {
    name: "Web",
    color: "#7c3aed",
  },
  Game: {
    name: "Game",
    color: "#22c55e",
  },
  Systems: {
    name: "Systems",
    color: "#dc2626",
  },
} satisfies Record<string, ProjectType>;

export interface Technology {
  name: string;
  icon: ReactNode | string;
  backgroundColor: string;
}

export const technologies = {
  React: {
    name: "React",
    icon: (
      <FaReact
        color="#61dbfb"
        size={18}
        className="flex justify-center items-center"
      />
    ),
    backgroundColor: "#61dbfb",
  },
  TypeScript: {
    name: "TypeScript",
    icon: <BiLogoTypescript color="#007acc" size={20} />,
    backgroundColor: "#007acc",
  },
  Python: {
    name: "Python",
    icon: "python.png",
    backgroundColor: "#306998", // or #FFD43B
  },
  Rust: {
    name: "Rust",
    icon: "rust.png",
    backgroundColor: "#CE412B",
  },
  CSharp: {
    name: "C#",
    icon: "csharp.png",
    backgroundColor: "#6a1577",
  },
  Go: {
    name: "Go",
    icon: "go.png",
    backgroundColor: "#00ADD8",
  },
  SQL: {
    name: "SQL",
    icon: "sql.png",
    backgroundColor: "#7fba00",
  },
  CPlusPlus: {
    name: "C++",
    icon: "cpp.png",
    backgroundColor: "#044F88",
  },
  Next: {
    name: "Next.js",
    icon: "nextjs.svg",
    backgroundColor: "black",
  },
  Vue: {
    name: "Vue.js",
    icon: "vuejs.png",
    backgroundColor: "#41B883",
  },
  Node: {
    name: "Node.js",
    icon: "node.png",
    backgroundColor: "#3C873A",
  },
  AWS: {
    name: "AWS",
    icon: "aws.png",
    backgroundColor: "#ff9900",
  },
  Docker: {
    name: "Docker",
    icon: "docker.png",
    backgroundColor: "#1D63ED",
  },
  Unity: {
    name: "Unity",
    icon: "unity.png",
    backgroundColor: "black",
  },
  PyTorch: {
    name: "PyTorch",
    icon: "pytorch.png",
    backgroundColor: "#DE3412",
  },
  NumPy: {
    name: "NumPy",
    icon: "numpy.png",
    backgroundColor: "#4d77cf",
  },
  Vercel: {
    name: "Vercel",
    icon: "vercel.svg",
    backgroundColor: "black",
  },
  Firebase: {
    name: "Firebase",
    icon: "firebase.png",
    backgroundColor: "#F57C00",
  },
} satisfies Record<string, Technology>;
