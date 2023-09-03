"use client";

import { useAtomValue } from "jotai";

import { activeProjectAtom } from "./state";
import { OPEN_ANIMATION_DURATION_CLASS } from "./constants";

export default function BlurOverlay() {
  const activeProject = useAtomValue(activeProjectAtom);

  return (
    <div
      className={`fixed top-0 w-screen h-screen transition ${OPEN_ANIMATION_DURATION_CLASS} ${
        activeProject !== null ? "opacity-100 z-[900]" : "opacity-0"
      } backdrop-blur-sm`}
    />
  );
}
