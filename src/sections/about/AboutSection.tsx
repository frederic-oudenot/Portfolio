import Title from "@/components/typography/Title";
import Description from "@/components/typography/Description";
import Avatar from "@/components/avatar/Avatar";
import Skills from "@/containers/skills/Skills";
import allAboutMe from "@/constants/allAboutMe";

export default function AboutSection() {
  return (
    <section id="about" className={sectionStyle}>
      <article className={articleStyle}>
        <Title id={"who-i-am"} content={allAboutMe?.section} variant="white" />
        <Avatar />
        <Title id={"job"} content={allAboutMe?.job} variant="white" />

        {allAboutMe?.descriptionAbout?.map((data, index) => (
          <Description key={index} content={data} />
        ))}
      </article>

      {/* <article className={articleStyle}>
        <Title id={"cursus"} content={allAboutMe?.title2} variant="white" />
        {allAboutMe?.descriptionCursus.map((data, index) => (
          <Description key={index} content={data} />
        ))}
      </article> */}

      <article className={articleStyle}>
        <Title id={"skills"} content={allAboutMe?.title3} variant="white" />
        {allAboutMe?.descriptionSkills.map((data, index) => (
          <Description key={index} content={data} />
        ))}
        <Skills />
      </article>
    </section>
  );
}

const articleStyle = "flex flex-col place-items-center gap-5";

const sectionStyle = `${articleStyle} p-10 bg-[#465952] text-white overflow-y-auto`;
