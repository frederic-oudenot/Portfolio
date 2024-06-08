import CardProject from "@/containers/card-project/CardProject";
import { useAppSelector } from "@/hooks/Redux";

export default function PortfolioSection() {
  const project = useAppSelector((state) => state.projects.projects);
  const selectedProject = useAppSelector(
    (state) => state.projects.selectedProject
  );

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

const sectionStyle = `flex flex-col place-items-center gap-2 w-full h-full p-10 bg-[#465952] text-white gap-10`;
