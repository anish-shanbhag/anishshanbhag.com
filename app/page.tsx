import Image from "next/image";

import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectItem from "./ProjectItem";
import Transitioner from "./Transitioner";
import BlurOverlay from "./BlurOverlay";
import { projects } from "./projects";

export default function Home() {
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
            <ProjectItem key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-8 -tracking-wider">
        Made with ❤️ in Berkeley, CA
      </div>
    </>
  );
}
