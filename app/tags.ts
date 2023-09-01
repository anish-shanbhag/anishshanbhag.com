import { ReactNode } from "react";

export interface Technology {
  name: string;
  icon: ReactNode | string;
  backgroundColor: string;
  textColor: string;
}

export interface ProjectType {
  name: string;
  color: string;
}

export const technologies = {
  React: {
    name: "React",
    icon: "/",
    backgroundColor: "a",
    textColor: "white",
  },
} satisfies Record<string, Technology>;
