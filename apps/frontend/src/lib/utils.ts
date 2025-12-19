import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Status } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const statusLabels: Record<Status, string> = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
