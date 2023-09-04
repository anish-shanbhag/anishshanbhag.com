"use client";

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

import { Project } from "../../utils/projects";
import { OPEN_ANIMATION_DURATION } from "../../utils/constants";
import { activeProjectAtom, isTransitioningAtom } from "../../utils/state";

import { ProjectContent } from "./ProjectContent";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const activeProject = useAtomValue(activeProjectAtom);
  const isTransitioning = useAtomValue(isTransitioningAtom);
  const [isActive, setIsActive] = useState(false);

  const isCurrentProject = activeProject?.name === project.name;

  useEffect(() => {
    if (isActive && !isCurrentProject) {
      setTimeout(() => {
        setIsActive(false);
      }, OPEN_ANIMATION_DURATION);
    } else if (!isActive && isCurrentProject) {
      setIsActive(true);
    }
  }, [isActive, isCurrentProject]);

  const cardZIndex = isActive
    ? 2000
    : !isTransitioning && activeProject === null
    ? 500 - index
    : -20;

  return (
    <div className="w-80 h-[17rem] relative" style={{ zIndex: cardZIndex }}>
      <ProjectContent
        project={project}
        index={index}
        isCurrentProject={isCurrentProject}
        isActive={isActive}
      />
    </div>
  );
}
