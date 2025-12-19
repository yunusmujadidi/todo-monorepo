"use client";

import { useEffect, useState } from "react";
import { Title } from "@/components/layout/title";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { Task } from "@/lib/types";
import { taskApi } from "@/lib/api";
import { Loader2 } from "lucide-react";

const DashboardPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskApi.getAll();
        setTasks(data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loader2 className="animate-spin size-6" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <Title
        title="Dashboard"
        description="Welcome back! Manage your tasks here"
      />

      <DataTable
        columns={columns}
        data={tasks}
        searchKey="title"
        searchPlaceholder="Search tasks..."
      />
    </div>
  );
};

export default DashboardPage;
