import { create } from "zustand";

interface AuthStore {
  token: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  token: null,

  signIn: (token) => {
    document.cookie = `token=${token}; path=/`;
    set({ token });
  },

  signOut: () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    set({ token: null });
  },
}));
