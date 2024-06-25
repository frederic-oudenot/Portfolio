import SliderButton from "../buttons/SliderButton";

interface SliderProp {
  handleClickOpenSession: () => void;
  positionX: number;
  color: string;
}

export default function Slider({
  handleClickOpenSession,
  positionX,
  color,
}: SliderProp) {
  return (
    <div className="relative w-32 h-16 bg-slate-800/70 rounded-full p-2 gap-2">
      <SliderButton
        color={color}
        positionX={positionX}
        handleClickOpenSession={handleClickOpenSession}
      />
    </div>
  );
}
