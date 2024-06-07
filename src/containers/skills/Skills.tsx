import CardSkills from "@/containers/card-skill/CardSkills";
import skills from "@/constants/skills";

interface SkillsProp {
  techno?: string;
}
export default function Skills({ techno }: SkillsProp) {
  return (
    <section className={techno ? "grid gap-4" : "grid grid-cols-4 gap-4"}>
      {techno
        ? skills.map((skill, index) => {
            if (skill.name === techno) {
              return <CardSkills key={index} skill={skill} width={8} />;
            }
          })
        : skills.map((skill, index) => {
            return <CardSkills key={index} skill={skill} width={8} />;
          })}
    </section>
  );
}
