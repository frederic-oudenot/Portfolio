import CardProject from "@/containers/card-project/CardProject";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { changeProject } from "@/store/reducers/projectsSlice";
import { useEffect } from "react";

export default function PortfolioSection() {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    (state) => state.languages.currentLanguage
  );
  useEffect(() => {
    dispatch(changeProject({ currentLanguage }));
  }, [dispatch, currentLanguage]);
  const selectedProject = useAppSelector(
    (state) => state.projects.selectedProject
  );
  const project = useAppSelector((state) => state.projects.projects);


  return (
    <section id="portfolio" className={sectionStyle}>
      {selectedProject ? (
        <CardProject project={selectedProject} />
      ) : (
        <CardProject project={project} />
      )}
    </section>
  );
}

const sectionStyle = `flex flex-col place-items-center gap-2 p-10 bg-[#465952] text-white gap-10 h-full max-md:h-full`;
