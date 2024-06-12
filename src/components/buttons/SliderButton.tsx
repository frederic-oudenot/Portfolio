interface SliderButtonProp {
  handleClickOpenSession: () => void;
  position: any;
  color: string;
}

export default function SliderButton({
  handleClickOpenSession,
  position,
  color,
}: SliderButtonProp) {
  return (
    <button
      onClick={() => handleClickOpenSession()}
      style={{
        left: `${position}px`,
        transitionDelay: "250ms",
        transition: "all 1s ease-out",
      }}
      className={
        color
          ? `absolute w-12 h-12 bg-${color}-400 rounded-full p-6`
          : `absolute w-12 h-12 bg-red-400 rounded-full p-6`
      }
    ></button>
  );
}
