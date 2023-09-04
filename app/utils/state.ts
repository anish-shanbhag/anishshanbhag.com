"use client";

import { atom } from "jotai";

import { Project } from "./projects";

export const activeProjectAtom = atom<Project | null>(null);
export const isTransitioningAtom = atom(false);
