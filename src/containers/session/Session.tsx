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
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  const [positionX, setPositionX] = useState({ x: 10 });
  const [color, setColor] = useState<string>("red");

  function handleClickOpenSession() {
    setPositionX({
      x: 70,
    });
    setColor("green");

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
