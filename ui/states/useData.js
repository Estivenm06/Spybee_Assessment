import { create } from "zustand";

import mockData from "@/mocks/mock_data.json";

export const useGetData = create(( ) => ({
    projects: mockData,
    lengthProjects: mockData.length,
}))