import Title from "@/components/typography/Title";
import ComputerContainer from "../../containers/computer/ComputerContainer";
import Description from "@/components/typography/Description";

const title = "Bonjour, je m'appelle Frédéric OUDENOT";
const description =
  "Ingénieur généraliste diplômé en 2011 avec une spécialisation en Productique et Système Industriel, j'ai acquis une solide expérience en tant qu'ingénieur qualité chez Safran. En 2022, j'ai décidé de me lancer dans une nouvelle aventure et j'ai obtenu un titre professionnel en développement web et mobile.";
const title2 = "MES COMPETENCES";
const description2 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aliquam, quis aut odio labore id unde adipisci cumque blanditiis est eligendi, vero consequatur reprehenderit ullam rem eum voluptas quam pariatur veniam sequi provident, iure possimus ratione. Placeat cum sint, repellendus quia nulla ipsum molestiae voluptatibus maxime temporibus, aspernatur, officiis quis at neque fugiat reprehenderit eos. Eius officiis pariatur consequuntur. Minima eveniet,";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="w-full">
        <article className="flex flex-col justify-center content-center p-5 text-black">
          <Title content={title} />
          <Description content={description} />
        </article>
        <ComputerContainer />
        <article className="flex flex-col justify-center content-center p-5 text-black">
          <Title content={title2} />
          <Description content={description2} />
        </article>
      </section>
    </>
  );
}
