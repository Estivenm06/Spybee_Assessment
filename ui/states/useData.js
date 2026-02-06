import { create } from "zustand";

import mockData from "@/mocks/mock_data.json";

export const useGetData = create((set, get) => ({
  projects: mockData,
  allProjects: mockData,
  lengthP: () => {
    return get().projects.length;
  },
  seeker: (text) => {
    const query = text.trim().toLowerCase();
    if (!query) {
      set({ projects: get().allProjects });
      return;
    }

    const results = get().allProjects.filter((p) =>
      (p.title ?? "").toLowerCase().includes(query),
    );

    return set({ projects: results });
  },
}));
