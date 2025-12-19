// TODO: implement prisma schema types on monorepo packages?

export interface User {
  id: string;
  name: string;
  email: string;
  username?: string;
  createdAt: string;
  updatedAt: string;
}

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: Status;
  deadline: string;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}
