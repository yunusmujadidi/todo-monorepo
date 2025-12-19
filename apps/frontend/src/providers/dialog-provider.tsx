"use client";

import { CreateTaskModal } from "@/components/modals/create-task-modal";
import { EditTaskModal } from "@/components/modals/edit-task-modal";

export const DialogProvider = () => {
  return (
    <>
      <CreateTaskModal />
      <EditTaskModal />
    </>
  );
};
