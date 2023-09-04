import Image from "next/image";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/projects/ProjectCard";
import Transitioner from "../components/Transitioner";
import BlurOverlay from "../components/BlurOverlay";
import { projects } from "../utils/projects";

export default function Home() {
  return (
    <>
      <title>Anish Shanbhag | Home</title>
      <BlurOverlay />
      <Transitioner />
      <div className="fixed top-0 w-full h-full opacity-80 z-[-30]">
        <Image
          src="/images/sky.png"
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
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center mb-8 -tracking-wider">
        Made with ❤️ in Berkeley, CA
      </div>
    </>
  );
}
