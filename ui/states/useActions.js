import { create } from "zustand";

export const useActions = create((set) => ({
  filters: {
    list: true,
    card: false,
    map: false,
  },
  setFilters: (name) => {
    set(state => ({...state, filters: { list: false, card: false, map: false, [name]: true }}))
  }
}));
