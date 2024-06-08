import allProjects from "@/constants/allProjects";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProjectState {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  state: string;
  image: string;
  url: string;
  view: string;
  src: string;
}

interface ProjectsState {
  projects: ProjectState[];
}

const initialState: any = {
  projects: allProjects[0],
  selectedProject: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    changeProject(state, action: PayloadAction<any>) {
      const foundProject = allProjects.find(
        (project) => project?.id === action.payload
        );
    console.log("🚀 ~ changeProject ~ action.payload:", action.payload)
      if (foundProject) {
        state.selectedProject = { ...foundProject };
      } else {
        state.selectedProject = null;
      }
    },
  },
});

export const { changeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
