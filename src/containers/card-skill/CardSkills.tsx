import IconLanguage from "@/components/icons/IconLanguage";
import SubTitle from "@/components/typography/SubTitle";

interface CardSkillsProps {
  skill: any;
  widthCard: number;
}

export default function CardSkills({ skill, widthCard }: CardSkillsProps) {
  const cardStyle = `flex flex-col p-2 gap-2 items-center place-content-center rounded-lg w-[8rem] h-[8rem]`;
  const showCardStyle = `${cardStyle} bg-[#F2F2F0]  hover:scale-105`;
  const loadingCardStyle = `${cardStyle} bg-[#F2F2F0]  hover:scale-105`;

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

/* Previous card 
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [hoveredCard, setHoveredCard] = useState<string>("");

   function handleDisplayCard(hover: boolean, id: string) {
     setIsHovered(hover);
     setHoveredCard(id);
   }
  const hiddenCardStyle = `${cardStyle} bg-[#F2A9A2]`;

  <article
onTouchEnd={() => handleDisplayCard(true, skill?.id)}
onMouseOver={() => handleDisplayCard(true, skill?.id)}
id={skill?.id}
className={skill ? loadingCardStyle : showCardStyle}
 className={
   isHovered && hoveredCard === skill?.id
     ? showCardStyle
     : hiddenCardStyle
}
>
<IconLanguage src={skill?.src} width={12} />
<SubTitle id={skill?.id} content={skill?.name} variant="black" />
{ {isHovered && hoveredCard === skill?.id ? (
  <>
    <IconLanguage src={skill?.src} width={12} />
    <SubTitle id={skill?.id} content={skill?.name} variant="black" />
  </>
) : (
  <img
    className={`w-[8rem] h-[8rem]`}
    src="https://img.icons8.com/?size=100&id=ySxoMWYW1c3u&format=png&color=000000"
  />
)} } */
