import { create } from "zustand";

interface User {
  info: {
    name: string;
    age: number;
  } | null;
}

const useUserStore = create<User>((set) => ({
  info: null,
  increasePopulation: () => (payload: any) => set(() => ({ info: payload })),
  logout: () => set({ info: null }),
}));

export default useUserStore;
