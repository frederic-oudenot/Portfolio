import CardSkills from "@/containers/card-skill/CardSkills";
import skills from "@/constants/skills";

interface SkillsProp {
  techno?: string;
}
export default function Skills({ techno }: SkillsProp) {
  return (
    <section className={techno ? "grid gap-2" : "grid grid-cols-4 gap-4 max-sm:grid-cols-2"}>
      {techno
        ? skills.map((skill, index) => {
            if (skill.id === techno) {
              return <CardSkills key={index} skill={skill} widthCard={8} />;
            }
          })
        : skills.map((skill, index) => {
            return <CardSkills key={index} skill={skill} widthCard={8} />;
          })}
    </section>
  );
}
