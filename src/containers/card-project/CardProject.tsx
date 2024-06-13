import MainButton from "@/components/buttons/MainButton";
import Description from "@/components/typography/Description";
import Title from "@/components/typography/Title";
import Image from "next/image";
import Skills from "../skills/Skills";
import SubTitle from "@/components/typography/SubTitle";

export default function CardProject({ project }: any) {
  return (
    <article className={articleStyle}>
      <Title id={project?.id} content={project?.name} variant={"white"} />
      <SubTitle
        id={project?.state}
        content={`statut : ${project?.state}`}
        variant={"white"}
      />
      <Description content={project?.description} />
      {project.image.map((img: string, index: number) => (
        <Image
          key={index}
          width={500}
          height={300}
          className={"rounded-lg"}
          src={img}
          alt={img}
        />
      ))}

      <div className="grid grid-cols-3 p-5 gap-4 max-md:grid-cols-2">
        {project.technologies?.map((techno: string, index: number) => (
          <Skills key={index} techno={techno} />
        ))}
      </div>

      <footer className="flex flex-row max-md:mb-10">
        <MainButton
          label={project?.view}
          link={project?.url}
          id={project?.id}
        />
      </footer>
    </article>
  );
}

const articleStyle = "flex flex-col place-items-center gap-y-2";
