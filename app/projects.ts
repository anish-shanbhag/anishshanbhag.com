import { ProjectType, Technology } from "./tags";

export interface Project {
  title: string;
  image: string;
  additionalImages?: string[];
  projectType?: ProjectType;
  technologies: Technology[];
  tagline: string;
  link?: string;
  githubLink?: string;
  longDescription: string;
}

export const projects: Project[] = [];
