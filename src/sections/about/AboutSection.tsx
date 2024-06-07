import Title from "@/components/typography/Title";
import Description from "@/components/typography/Description";
import Avatar from "@/components/avatar/Avatar";
import Skills from "@/containers/skills/Skills";

const section = "QUI SUIS-JE ?";
const title = "Bonjour, c'est Frédéric OUDENOT";
const descriptionAbout = [
  "Après avoir accumulé plus de 11 ans d'expérience en tant qu'ingénieur qualité production chez Safran, Mon parcours en ingénierie m'a permis de développer des compétences dans la gestion de projet, la résolution de problèmes et l'assurance qualité.",
  "Des compétences essentielles pour garantir la conformité des produits et respecter les exigences clients. ",
  "Poussé par une passion pour la technologie et l'innovation, j'ai récemment décidé de me reconvertir dans l'IT et j'ai obtenu un titre professionnel en développement web et mobile, en 2024 chez O'CLOCK. Cette formation m'a permis de maîtriser les langages de programmation modernes tels que HTML, CSS, JavaScript, Typescript ainsi que des frameworks front-end comme React et NEXTJs et des technologies back-end comme Node.js",
];
const title2 = "MES COMPETENCES";
const descriptionSkills = [
  "Ci-dessous, vous trouverez une liste des compétences non exhautives des technologies utilisées. La vie est un long chemin d'apprentissage, il ne faut pas se fixer des limites !",
];

export default function AboutSection() {
  return (
    <section id="about" className={sectionStyle}>
      <article className={articleStyle}>
        <Title id={"who-i-am"} content={section} variant="white" />
        <Avatar />
        <Title id={"welcome"} content={title} variant="white" />
        <Title id={"job"} content={"Développeur Fullstack"} variant="white" />

        {descriptionAbout.map((data, index) => (
          <Description key={index} content={data} />
        ))}
      </article>

      <article className={articleStyle}>
        <Title id={"skills"} content={title2} variant="white" />
        {descriptionSkills.map((data, index) => (
          <Description key={index} content={data} />
        ))}
        <Skills />
      </article>
    </section>
  );
}

const articleStyle = "flex flex-col place-items-center gap-5";

const sectionStyle = `${articleStyle} p-10 bg-[#465952] text-white`;
