import IconLanguage from "@/components/icons/IconLanguage";
import SubTitle from "@/components/typography/SubTitle";

interface CardSkillsProps {
  skill: any;
  widthCard: number;
}

export default function CardSkills({ skill, widthCard }: CardSkillsProps) {
  return (
    <>
      <article
        id={skill?.id}
        className={skill ? loadingCardStyle : showCardStyle}
      >
        <IconLanguage id={`icon-${skill.id}`} src={skill?.src} width={12} />
        <SubTitle id={skill?.id} content={skill?.name} variant="black" />
      </article>
    </>
  );
}
  const cardStyle = `flex flex-col p-2 gap-2 items-center place-content-center rounded-lg w-[8rem] h-[8rem]`;
  const showCardStyle = `${cardStyle} bg-[#F2F2F0]  hover:scale-105`;
  const loadingCardStyle = `${cardStyle} bg-[#F2F2F0]  hover:scale-105`;