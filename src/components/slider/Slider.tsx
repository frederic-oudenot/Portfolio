import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import SliderButton from "../buttons/SliderButton";

interface SliderProp {
  handleClickOpenSession: () => void;
  position: number;
  color: string;
}

export default function Slider({
  handleClickOpenSession,
  position,
  color,
}: SliderProp) {
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
