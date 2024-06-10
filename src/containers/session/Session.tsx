import Avatar from "@/components/avatar/Avatar";
import Slider from "@/components/slider/Slider";
import Title from "@/components/typography/Title";
import { Dispatch, SetStateAction } from "react";

interface SessionProp {
  SetDisplay: Dispatch<SetStateAction<Boolean>>;
}

export default function Session({ SetDisplay }: SessionProp) {
  return (
    <section
      className="absolute w-full h-screen place-content-center z-10"
      id="session"
    >
      <div className="flex flex-col w-full place-items-center space-y-2 m-auto text-center">
        <Avatar />
        <Title
          id={"welcome-session"}
          content={"Bienvenue sur le portfolio de Frédéric OUDENOT"}
          variant={"white"}
        />
        <Slider SetDisplay={SetDisplay} />
      </div>
    </section>
  );
}
