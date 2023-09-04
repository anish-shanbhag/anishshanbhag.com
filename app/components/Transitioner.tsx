"use client";

import { useAtom, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import { activeProjectAtom, isTransitioningAtom } from "../utils/state";
import { OPEN_ANIMATION_DURATION } from "../utils/constants";
import { Project } from "../utils/projects";

function useScrollbarWidth() {
  const didCompute = useRef(false);
  const widthRef = useRef(0);

  if (typeof window === "undefined") return 0;

  if (didCompute.current) return widthRef.current;

  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode!.removeChild(outer);

  didCompute.current = true;
  widthRef.current = scrollbarWidth;

  return scrollbarWidth;
}

let backListenerRegistered = false;

export default function Transitioner() {
  const [oldActiveProject, setOldActiveProject] = useState<Project | null>(
    null,
  );
  const [activeProject, setActiveProject] = useAtom(activeProjectAtom);
  const setIsTransitioning = useSetAtom(isTransitioningAtom);

  const scrollbarWidth = useScrollbarWidth();

  useEffect(() => {
    if (!backListenerRegistered && activeProject) {
      backListenerRegistered = true;
      window.addEventListener("popstate", () => {
        if (activeProject) {
          setActiveProject(null);
        }
      });
    }

    if (oldActiveProject !== activeProject) {
      setOldActiveProject(activeProject);
      setIsTransitioning(true);

      setTimeout(() => {
        setIsTransitioning(false);
      }, OPEN_ANIMATION_DURATION);

      if (activeProject && window) {
        document.body.style.marginRight = scrollbarWidth + "px";
        document.body.classList.add("overflow-y-hidden");
      } else if (window) {
        setTimeout(() => {
          document.body.style.marginRight = "0px";
          document.body.classList.remove("overflow-y-hidden");
        }, OPEN_ANIMATION_DURATION);
      }
    }
  }, [activeProject]);

  return null;
}
