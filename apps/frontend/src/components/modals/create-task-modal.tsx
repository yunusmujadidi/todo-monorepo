"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTaskModal } from "@/hooks/use-task";
import { TaskForm } from "../forms/task-form";

export const CreateTaskModal = () => {
  const { isOpen, mode, close } = useTaskModal();

  if (mode !== "create") return null;

  return (
    <Dialog open={isOpen && mode === "create"} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <TaskForm
          onSuccess={() => {
            close();
            window.location.reload();
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
