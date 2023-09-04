import { FaLink } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import { Project } from "../..//utils/projects";

export default function ProjectFeatures({ project }: { project: Project }) {
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
                    src={"/images/technologies/" + technology.icon}
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
