"use client";
import { useTaskModal } from "@/hooks/use-task";
import { Button } from "../ui/button";

export const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { openCreate } = useTaskModal();
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Button onClick={() => openCreate()}>Add new Task</Button>
    </div>
  );
};
