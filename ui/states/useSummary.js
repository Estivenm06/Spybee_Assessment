import { create } from "zustand";

export const useSummary = create((set, get) => ({
  cardValues: [
    {
      label: "Incidencias",
      total: 60,
      percentage: 10,
    },
    {
      label: "RFI",
      total: 50,
      percentage: 23,
    },
    {
      label: "Tareas",
      total: 120,
      percentage: 50,
    },
  ],
  dropdown: false,
  setDropdown: () => set({ dropdown: !get().dropdown }),
}));
