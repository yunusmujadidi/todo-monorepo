"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Task } from "@/lib/types";
import { statusLabels } from "@/lib/utils";
import { useTaskModal } from "@/hooks/use-task";
import { taskApi } from "@/lib/api";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TaskActionButton = ({ row }: any) => {
  const task: Task = row.original;
  const { openEdit } = useTaskModal();

  const handleStatusUpdate = async (status: Task["status"]) => {
    try {
      await taskApi.update(task.id, { status });
      toast.success(`Task marked as ${statusLabels[status]}`);
      window.location.reload();
    } catch {
      toast.error("Failed to update task");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    try {
      await taskApi.delete(task.id);
      toast.success("Task deleted");
      window.location.reload();
    } catch {
      toast.error("Failed to delete task");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => openEdit(task)}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusUpdate("TODO")}>
          Mark To Do
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusUpdate("IN_PROGRESS")}>
          Mark In Progress
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusUpdate("DONE")}>
          Mark Done
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete} className="text-destructive">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
