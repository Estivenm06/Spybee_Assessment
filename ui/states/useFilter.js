import { create } from "zustand";

export const useFilter = create((set, get) => ({
  dropdown: false,
  enableDropdown: () => set({ dropdown: !get().dropdown }),
}));
