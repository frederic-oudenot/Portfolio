import { useState } from "react";
import Description from "@/components/typography/Description";
import Title from "@/components/typography/Title";

export default function Modal() {
  const [display, setDisplay] = useState<boolean>(true);
  function handleCloseModal() {
    setDisplay(!display);
  }
  return (
    <>
      {display ? (
        <section
          onClick={handleCloseModal}
          onTouchEnd={handleCloseModal}
          className="absolute inset-1/4 m-auto max-w-md max-h-md rounded-lg bg-white p-10 z-50 max-md:h-1/2"
          id={"modal"}
        >
          <button className="absolute text-black right-10 hover:scale-125">
            X
          </button>
          <article className="flex flex-col space-y-12 gap-2 text-center max-md:gap-0 max-md:space-y-4">
            <Title
              id={"modal-title"}
              content={"Bienvenue sur OS Experience"}
              variant={"black"}
            />
            <Description
              content={
                "Bienvenue sur mon portfolio, conçu pour offrir une expérience utilisateur unique et immersive, inspirée par le système d'exploitation macOS. Explorez mes compétences, découvrez mes projets et apprenez-en plus sur mon parcours professionnel à travers une interface élégante et intuitive."
              }
              variant={"black"}
            />
          </article>
        </section>
      ) : null}
    </>
  );
}
