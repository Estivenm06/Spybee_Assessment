import { create } from "zustand";

export const useActions = create((set) => ({
  actions: {
    list: true,
    card: false,
    map: false,
  },
  setActions: (name) => {
    set(state => ({...state, actions: { list: false, card: false, map: false, [name]: true }}))
  },
  sortBy: "",
  setFilter: (option) => set({ sortBy: option })
}));
