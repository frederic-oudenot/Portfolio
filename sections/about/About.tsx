import CardSkills from "../../components/card-skill/CardSkills";
import skills from "../../constants/skills";
import ComputerContainer from "../../containers/computer/ComputerContainer";

export default function About() {
  return (
    <>
      <section id="about" className=" w-dvw">
        <article className="flex flex-col p-10 items-start justify-around w-full h-full">
          <h1>About</h1>
          <p>
            Ce site est un portfolio interactif, conçu pour me présenter, ainsi
            que mes projets. Il offre une navigation fluide et intuitive, avec
            un design minimaliste et élégant. Il est conçu pour être accessible
            sur tous les appareils, offrant une expérience utilisateur optimale
          </p>
          <article className="flex p-10 gap-2 w-full">
            <ComputerContainer />
            <div className="flex flex-col">
              <h1>My skills</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus aliquam, quis aut odio labore id unde adipisci cumque
                blanditiis est eligendi, vero consequatur reprehenderit ullam
                rem eum voluptas quam pariatur veniam sequi provident, iure
                possimus ratione. Placeat cum sint, repellendus quia nulla ipsum
                molestiae voluptatibus maxime temporibus, aspernatur, officiis
                quis at neque fugiat reprehenderit eos. Eius officiis pariatur
                consequuntur. Minima eveniet,
              </p>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}
