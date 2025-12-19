"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, CircleCheck, Loader, Circle } from "lucide-react";
import { Task } from "@/lib/types";
import { statusLabels } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { TaskActionButton } from "./action-button";

export const columns: ColumnDef<Task>[] = [
  {
    //   title
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="hover:underline hover:cursor-pointer">
          {row.getValue("title")}
        </div>
      );
    },
  },
  //   description
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="truncate text-muted-foreground">
          {row.getValue("description")}
        </div>
      );
    },
  },
  //   status
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant="outline" className="text-muted-foreground">
          {status === "DONE" ? (
            <CircleCheck className="size-4 fill-green-500 dark:fill-green-400 text-white dark:text-background" />
          ) : status === "IN_PROGRESS" ? (
            <Loader className="size-4 text-primary" />
          ) : (
            <Circle className="size-4 text-muted-foreground" />
          )}
          {statusLabels[status]}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value === row.getValue(id);
    },
  },
  //   deadline
  {
    accessorKey: "deadline",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Deadline
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-sm text-muted-foreground">
          {new Date(row.getValue("deadline")).toLocaleDateString()}
        </div>
      );
    },
  },
  //   createdAt
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-sm text-muted-foreground">
          {new Date(row.getValue("createdAt")).toLocaleDateString()}
        </div>
      );
    },
  },
  //   actions button
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <TaskActionButton row={row} />,
  },
];
