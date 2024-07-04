import { useState } from "react";
import Description from "@/components/typography/Description";
import Title from "@/components/typography/Title";
import SubTitle from "@/components/typography/SubTitle";
import MainButton from "@/components/buttons/MainButton";
import { useAppSelector } from "@/hooks/Redux";

export default function Modal() {
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
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
          className="absolute inset-1/4 m-auto max-w-md h-[450px] rounded-lg bg-white p-6 z-50 max-md:h-11/12 max-md:overflow-y-auto"
          id={"modal"}
        >
          <MainButton
            id={"modal-close-button"}
            label={userLanguage?.genericContent.closeButton}
          />

          <article className="flex flex-col space-y-12 gap-2 text-center max-md:space-y-2">
            <Title
              id={"modal-title"}
              content={userLanguage?.modalContent.titleWelcome}
              variant={"black"}
            />
            <Description
              content={userLanguage?.modalContent.welcome}
              variant={"black"}
            />
            <SubTitle
              id={"created-by"}
              content={userLanguage?.modalContent.developBy}
              variant={"black"}
              from={"modal"}
            />
          </article>
        </section>
      ) : null}
    </>
  );
}
