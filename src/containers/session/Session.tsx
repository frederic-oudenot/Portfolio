import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Avatar from "@/components/avatar/Avatar";
import Slider from "@/components/slider/Slider";
import Title from "@/components/typography/Title";
import SubTitle from "@/components/typography/SubTitle";
import { useAppSelector } from "@/hooks/Redux";

interface SessionProp {
  SetDisplay: Dispatch<SetStateAction<Boolean>>;
}

export default function Session({ SetDisplay }: SessionProp) {
  // Returning language selected by user
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  // Init State Hook : position session
  const [positionX, setPositionX] = useState({ x: 10 });
  // Init State Hook : color button
  const [color, setColor] = useState<string>("red");

  // Function : Button switch to open session
  function handleClickOpenSession() {
    // Change state position
    setPositionX({
      x: 70,
    });
    // Change color button
    setColor("green");

    // Adding a timer to finish the action
    setTimeout(() => {
      SetDisplay(true);
    }, 1000);
  }
  return (
    <section
      className="absolute w-full h-screen place-content-center z-10"
      id="session"
    >
      <div className="flex flex-col w-80 place-items-center space-y-2 m-auto text-center">
        <Avatar />
        <Title
          id={"welcome-session"}
          content={userLanguage?.welcomePage.messageWelcome}
          variant={"white"}
        />
        <Slider
          handleClickOpenSession={handleClickOpenSession}
          positionX={positionX.x}
          color={color}
        />
        <SubTitle
          id={"click-on"}
          content={userLanguage?.welcomePage.click}
          variant={"white"}
          from={"session"}
        />
      </div>
    </section>
  );
}
