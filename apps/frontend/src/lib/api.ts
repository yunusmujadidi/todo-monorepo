import axios from "axios";
import type {
  Task,
  SignInDto,
  SignUpDto,
  SignInResponse,
  SignUpResponse,
  CreateTaskDto,
  UpdateTaskDto,
  Status,
} from "./types";

// axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// auth api
export const authApi = {
  signIn: async (data: SignInDto): Promise<SignInResponse> => {
    const res = await api.post("/auth/sign-in", data);
    return res.data;
  },
  signUp: async (data: SignUpDto): Promise<SignUpResponse> => {
    const res = await api.post("/auth/sign-up", data);
    return res.data;
  },
};

// task api
export const taskApi = {
  getAll: async (
    status?: Status,
    sortBy?: "deadline" | "createdAt"
  ): Promise<Task[]> => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (sortBy) params.append("sortBy", sortBy);
    const res = await api.get(`/tasks?${params.toString()}`);
    return res.data;
  },
  getById: async (id: string): Promise<Task> => {
    const res = await api.get(`/tasks/${id}`);
    return res.data;
  },
  create: async (data: CreateTaskDto): Promise<Task> => {
    const res = await api.post("/tasks", data);
    return res.data;
  },
  update: async (id: string, data: UpdateTaskDto): Promise<Task> => {
    const res = await api.patch(`/tasks/${id}`, data);
    return res.data;
  },
  delete: async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },
};

export default api;
