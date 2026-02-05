import { create } from "zustand";

export const usePagination = create((set) => ({
  page: 0,
  updatePage: (page) => set(() => ({ page: page })),
}));
