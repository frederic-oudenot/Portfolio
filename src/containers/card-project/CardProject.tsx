import MainButton from "@/components/buttons/MainButton";
import Tag from "@/components/tag/Tag";
import Description from "@/components/typography/Description";
import Title from "@/components/typography/Title";
import Image from "next/image";
import Skills from "../skills/Skills";

interface CardProjectProp {
  project: {
    id: string;
    name: string;
    description: string;
    technologies: any;
    state: string;
    src: string;
    url: string;
    view: string;
  };
}

export default function CardProject({ project }: CardProjectProp) {
  return (
    <article className={articleStyle}>
      <Title id={project?.id} content={project?.name} variant={"white"} />
      <Description content={project?.description} />
      <Image
        width={500}
        height={300}
        className={"rounded-lg"}
        src={project?.src}
        alt={project?.name}
      />

      <div className="flex flex-row gap-2 p-5">
        {project.technologies?.map((techno: string, index: number) => (
          <Skills key={index} techno={techno} />
        ))}
      </div>

      <footer className="flex flex-row mb-3">
        <MainButton label={project?.view} link={project?.url} />
      </footer>
    </article>
  );
}

const articleStyle = "flex flex-col place-items-center gap-y-2";
