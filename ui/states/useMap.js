import { create } from "zustand";

export const useMap = create((set) => ({
  coordenates: [0, 0],
  setCoordenates: (coordenates) => set({ coordenates: coordenates }),
}));
