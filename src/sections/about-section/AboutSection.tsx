import Title from "@/components/typography/Title";
import ComputerContainer from "../../containers/computer/ComputerContainer";
import Description from "@/components/typography/Description";
import Avatar from "@/components/avatar/Avatar";
import NavigatorHeader from "@/containers/header/NavigatorHeader";

const title = "Bonjour, je m'appelle Frédéric OUDENOT";
const description =
  "Après onze années chez Safran en tant qu'ingénieur qualité production, j'ai décidé de sortir de ma zone de confort et de découvrir de nouveaux sentiers! En 2023, c'est une nouvelle aventure avec une reconversion professionnelle. Passionné de technologies, j'ai choisi le développement web et mobile. Grâce à mes expériences, je suis rigoureux et j’ai la capacité d'analyser et de proposer des solutions. Je souhaite innover et satisfaire les besoins du client avec des outils adaptés. Je cherche actuellement une opportunnité pour évoluer sur des projets et de vivre de ma passion!";
const title2 = "MES COMPETENCES";
const description2 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquam, quis aut odio labore id unde adipisci cumque blanditiis est eligendi, vero consequatur reprehenderit ullam rem eum voluptas quam pariatur veniam sequi provident, iure possimus ratione. Placeat cum sint, repellendus quia nulla ipsum molestiae voluptatibus maxime temporibus, aspernatur, officiis quis at neque fugiat reprehenderit eos. Eius officiis pariatur consequuntur. Minima eveniet,";

export default function AboutSection() {
  return (
    <div className="flex flex-col">
      <NavigatorHeader content={'ABOUT'} />
      <section id="about" className="w-full">
        <article className={articleStyle}>
          <Avatar />
          <Title id={"welcome"} content={title} />
          <Description content={description} />
        </article>

        <article className={articleStyle}>
          <Title id={"skills"} content={title2} />
          <Description content={description2} />
          <ComputerContainer />
        </article>
      </section>
    </div>
  );
}

const articleStyle =
  "flex flex-col justify-center content-center p-5 bg-[#465952] text-white";
