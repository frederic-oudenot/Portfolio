import allProjects from "@/constants/allProjects";
import CardProject from "@/containers/card-project/CardProject";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className={sectionStyle}>
      {allProjects.map((project, index) => (
        <CardProject key={index} project={project} />
      ))}
    </section>
  );
}

const sectionStyle = `flex flex-col place-items-center gap-2 w-full h-full p-10 bg-[#465952] text-white gap-10`;
