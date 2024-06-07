import IconLanguage from "@/components/icons/IconLanguage";
import SubTitle from "../../components/typography/SubTitle";
import { useState } from "react";

interface CardSkillsProps {
  skill: any;
  width: number;
}

export default function CardSkills({ skill, width }: CardSkillsProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string>("");

  function handleDisplayCard(hover: boolean, id: string) {
    setIsHovered(hover);
    setHoveredCard(id);
  }
  const cardStyle = `flex flex-col gap-2 justify-center items-center rounded-lg w-[${width}rem] h-[${width}rem]`;
  const showCardStyle = `${cardStyle} bg-[#F2F2F0]  hover:scale-105`;
  const hiddenCardStyle = `${cardStyle} bg-[#F2A9A2]`;
  return (
    <>
      <article
        onMouseOver={() => handleDisplayCard(true, skill?.id)}
        id={skill?.id}
        className={
          isHovered && hoveredCard === skill?.id
            ? showCardStyle
            : hiddenCardStyle
        }
      >
        {isHovered && hoveredCard === skill?.id ? (
          <>
            <IconLanguage src={skill?.src} width={20} />
            <SubTitle name={skill?.name} variant="black" />
          </>
        ) : (
          <img
            className="w-10"
            src="https://img.icons8.com/?size=100&id=ySxoMWYW1c3u&format=png&color=000000"
          />
        )}
      </article>
    </>
  );
}
