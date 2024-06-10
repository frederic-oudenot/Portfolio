import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import SliderButton from "../buttons/SliderButton";

interface SliderProp {
  SetDisplay: Dispatch<SetStateAction<Boolean>>;
}

export default function Slider({ SetDisplay }: SliderProp) {
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
    <div className="relative w-32 h-16 bg-slate-800/70 rounded-full p-2 gap-2">
      <SliderButton
        color={color}
        position={position}
        handleClickOpenSession={handleClickOpenSession}
      />
    </div>
  );
}
