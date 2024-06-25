import getUserLanguage from "@/utils/getUserLanguage";
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
  projects: [],
  selectedProject: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<any>) {
      const language = action.payload;
      const resultLanguage = getUserLanguage({ selectedLanguage: language });
      state.projects = resultLanguage?.ProjectsPage[0];
    },
    changeProject(state, action: PayloadAction<any>) {
      let { projectId, currentLanguage } = action.payload;
      if (!projectId) {
        if (state.selectedProject && state.selectedProject?.id) {
          projectId = state.selectedProject?.id;
        } else {
          projectId = state.project?.id;
        }
      }

      const resultLanguage = getUserLanguage({
        selectedLanguage: currentLanguage,
      });
      const foundProject = resultLanguage?.ProjectsPage.find(
        (project) => project?.id === projectId
      );
      if (foundProject) {
        state.selectedProject = { ...foundProject };
      } else {
        state.selectedProject = null;
      }
    },
  },
});

export const { changeProject, setProject } = projectsSlice.actions;
export default projectsSlice.reducer;
