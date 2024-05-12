"use client";

import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import { activeProjectAtom, isLoadingAtom } from "../utils/state";
import { OPEN_ANIMATION_DURATION_CLASS } from "../utils/constants";

export default function BlurOverlay() {
  const isLoading = useAtomValue(isLoadingAtom);
  const activeProject = useAtomValue(activeProjectAtom);
  const [inFront, setInFront] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setInFront(false), 500);
    }
  }, [isLoading]);

  return (
    <>
      <div
        className={`fixed top-0 w-screen h-screen transition ${OPEN_ANIMATION_DURATION_CLASS} ${
          isLoading || activeProject !== null
            ? "opacity-100 z-[900]"
            : "opacity-0"
        } ${isLoading ? "backdrop-blur-lg" : "backdrop-blur-sm"} ${
          inFront ? "z-[900]" : ""
        }`}
      >
        <div
          className={`absolute transition-all ${OPEN_ANIMATION_DURATION_CLASS} ${
            isLoading ? "top-0 opacity-100" : "top-[60vh] opacity-0"
          }`}
        >
          <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex justify-center items-center w-32 h-32 bg-white border-white border-8 shadow-2xl rounded-lg">
              <div className="absolute w-16 h-16 rounded-full border-8 border-blue-500" />
              <div className="w-16 h-16 border-r-8 border-t-8 border-teal-400 rounded-full z-[10] animate-spin" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
