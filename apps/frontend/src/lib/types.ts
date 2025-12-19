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

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  name: string;
  email: string;
  username?: string;
  password: string;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  status?: Status;
  deadline: string;
  createdBy?: string;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  status?: Status;
  deadline?: string;
  createdBy?: string;
}

export interface SignInResponse {
  access_token: string;
}

export interface SignUpResponse {
  id: string;
  name: string;
  email: string;
  username?: string;
  createdAt: string;
  updatedAt: string;
}
