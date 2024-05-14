interface CardSkillsProps {
  id: string;
  name: string;
  src: any;
}

export default function CardSkills({ skill }: any) {
  return (
    <>
      <article
        id={skill?.id}
        className="flex flex-col gap-2 justify-center items-center bg-slate-600	rounded-lg w-[8rem] h-[8rem]"
      >
        <div className="w-20">{skill?.src}</div>
        <h5 className="text-white">{skill?.name}</h5>
      </article>
    </>
  );
}
