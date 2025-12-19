import { Title } from "@/components/layout/title";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { Task } from "@/lib/types";

// TODO: edit modal/dialog
// TODO: update task status func
// TODO: delete task func
// TODO: add sheet for edit
// TODO: add dialog for create
// TODO: add use confirm dialog for delete confirm
// TODO: zustand auth storage global hook
// TODO: zustand task global hook
// TODO: api.ts

const DashboardPage = () => {
  // mockup data
  const data: Task[] = [
    {
      id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      userId: "user-001",
      title: "Setup project structure",
      description:
        "Initialize the monorepo with NestJS backend and Next.js frontend",
      status: "DONE",
      deadline: "2025-12-15T10:00:00.000Z",
      createdBy: "Admin",
      createdAt: "2025-12-01T09:00:00.000Z",
      updatedAt: "2025-12-10T14:30:00.000Z",
    },
    {
      id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      userId: "user-001",
      title: "Implement authentication",
      description:
        "Add JWT-based authentication with sign-in and sign-up flows",
      status: "DONE",
      deadline: "2025-12-18T10:00:00.000Z",
      createdBy: "Admin",
      createdAt: "2025-12-05T11:00:00.000Z",
      updatedAt: "2025-12-17T16:45:00.000Z",
    },
    {
      id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
      userId: "user-001",
      title: "Create task CRUD endpoints",
      description:
        "Build REST API endpoints for creating, reading, updating, and deleting tasks",
      status: "IN_PROGRESS",
      deadline: "2025-12-20T10:00:00.000Z",
      createdAt: "2025-12-08T10:00:00.000Z",
      updatedAt: "2025-12-19T09:15:00.000Z",
    },
    {
      id: "d4e5f6a7-b8c9-0123-defa-234567890123",
      userId: "user-001",
      title: "Design dashboard UI",
      description:
        "Create a modern dashboard layout with sidebar navigation and data tables",
      status: "IN_PROGRESS",
      deadline: "2025-12-22T10:00:00.000Z",
      createdAt: "2025-12-10T14:00:00.000Z",
      updatedAt: "2025-12-19T11:30:00.000Z",
    },
    {
      id: "e5f6a7b8-c9d0-1234-efab-345678901234",
      userId: "user-001",
      title: "Add task filtering",
      description:
        "Implement status-based filtering and search functionality for tasks",
      status: "TODO",
      deadline: "2025-12-25T10:00:00.000Z",
      createdAt: "2025-12-12T09:00:00.000Z",
      updatedAt: "2025-12-12T09:00:00.000Z",
    },
    {
      id: "f6a7b8c9-d0e1-2345-fabc-456789012345",
      userId: "user-001",
      title: "Implement pagination",
      description:
        "Add server-side pagination for task list with configurable page sizes",
      status: "TODO",
      deadline: "2025-12-26T10:00:00.000Z",
      createdAt: "2025-12-13T10:30:00.000Z",
      updatedAt: "2025-12-13T10:30:00.000Z",
    },
    {
      id: "a7b8c9d0-e1f2-3456-abcd-567890123456",
      userId: "user-001",
      title: "Write unit tests",
      description:
        "Create comprehensive unit tests for backend services and controllers",
      status: "TODO",
      deadline: "2025-12-28T10:00:00.000Z",
      createdAt: "2025-12-14T08:00:00.000Z",
      updatedAt: "2025-12-14T08:00:00.000Z",
    },
    {
      id: "b8c9d0e1-f2a3-4567-bcde-678901234567",
      userId: "user-001",
      title: "Deploy to production",
      description:
        "Set up CI/CD pipeline and deploy the application to cloud infrastructure",
      status: "TODO",
      deadline: "2025-12-30T10:00:00.000Z",
      createdAt: "2025-12-15T11:00:00.000Z",
      updatedAt: "2025-12-15T11:00:00.000Z",
    },
  ];

  return (
    <div className="space-y-5">
      {/* title */}
      <Title
        title="Dashboard"
        description="Welcome back! Manage your tasks here"
      />

      {/* task table with filtering and pagination */}
      <DataTable
        columns={columns}
        data={data}
        searchKey="title"
        searchPlaceholder="Search tasks..."
      />
    </div>
  );
};

export default DashboardPage;
