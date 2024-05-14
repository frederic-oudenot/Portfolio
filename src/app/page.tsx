"use client";
import CardSkills from "../../components/card-skill/CardSkills";
import skills from "../../constants/skills";
import About from "../../sections/about/About";
import Contact from "../../sections/contact/Contact";
import Descritpion from "../../sections/description/Description";
import Portfolio from "../../sections/portofolio/Portfolio";

interface CardSkillsProps {
  id: string;
  name: string;
  src: string;
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <Descritpion />
      <About />
      {/*<Portfolio />*/}
      <Contact /> 
    </main>
  );
}
