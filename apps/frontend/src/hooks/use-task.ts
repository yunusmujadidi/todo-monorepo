import { create } from "zustand";
import type { Task } from "@/lib/types";

interface TaskModalState {
  isOpen: boolean;
  mode: "create" | "edit";
  task: Task | null;
  openCreate: () => void;
  openEdit: (task: Task) => void;
  close: () => void;
}

export const useTaskModal = create<TaskModalState>((set) => ({
  isOpen: false,
  mode: "create",
  task: null,
  openCreate: () => set({ isOpen: true, mode: "create", task: null }),
  openEdit: (task) => set({ isOpen: true, mode: "edit", task }),
  close: () => set({ isOpen: false, task: null }),
}));
