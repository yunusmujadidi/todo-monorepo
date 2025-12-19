"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { taskApi } from "@/lib/api";
import { useTaskModal } from "@/hooks/use-task";
import { TaskForm } from "../forms/task-form";
import { taskSchema } from "@/lib/zod-schema";
import z from "zod";

export const EditTaskModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, mode, task, close } = useTaskModal();

  if (mode !== "edit" || !task) return null;

  const onSubmit = async (data: z.infer<typeof taskSchema>) => {
    try {
      setIsLoading(true);
      await taskApi.update(task.id, data);
      toast.success("Task berhasil diupdate");
      close();
      window.location.reload();
    } catch {
      toast.error("Gagal mengupdate task");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen && mode === "edit"} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <TaskForm
          defaultValues={task}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};
