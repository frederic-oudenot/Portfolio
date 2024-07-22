import Title from "@/components/typography/Title";
import Description from "@/components/typography/Description";
import Avatar from "@/components/avatar/Avatar";
import Skills from "@/containers/skills/Skills";
import { useAppSelector } from "@/hooks/Redux";

export default function AboutSection() {
  // Returning langauge selected by user
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  return (
    <section id="about" className={sectionStyle}>
      <article className={articleStyle}>
        <Title
          id={"who-i-am"}
          content={userLanguage?.aboutPage.section}
          variant="white"
        />
        <Avatar />
        <Title
          id={"job"}
          content={userLanguage?.aboutPage?.job}
          variant="white"
        />

        {userLanguage?.aboutPage?.descriptionAbout?.map(
          (data: string, index: number) => (
            <Description key={index} content={data} />
          )
        )}
      </article>

      <article className={articleStyle}>
        <Title
          id={"skills"}
          content={userLanguage?.aboutPage?.skills}
          variant="white"
        />
        {userLanguage?.aboutPage?.descriptionSkills.map(
          (data: string, index: number) => (
            <Description key={index} content={data} />
          )
        )}
        <Skills />
      </article>
    </section>
  );
}

const articleStyle = "flex flex-col place-items-center gap-5";

const sectionStyle = `${articleStyle} p-10 bg-[#465952] text-white `;
