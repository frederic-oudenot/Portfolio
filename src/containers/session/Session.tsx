import { Dispatch, SetStateAction, useState } from "react";
import Avatar from "@/components/avatar/Avatar";
import Slider from "@/components/slider/Slider";
import Title from "@/components/typography/Title";
import language from "@/translation/fr/fr";

interface SessionProp {
  SetDisplay: Dispatch<SetStateAction<Boolean>>;
}

export default function Session({ SetDisplay }: SessionProp) {
  const [position, setPosition] = useState({ x: 10 });
  const [color, setColor] = useState<string>("red");

  function handleClickOpenSession() {
    setPosition({
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
          content={language.welcome}
          variant={"white"}
        />
        <Slider
          handleClickOpenSession={handleClickOpenSession}
          position={position.x}
          color={color}
        />
      </div>
    </section>
  );
}
