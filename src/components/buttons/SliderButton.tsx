interface SliderButtonProp {
  handleClickOpenSession: () => void;
  positionX: any;
  color: string;
  direction?: "left" | "right";
  top?: number;
  label?: string;
}

export default function SliderButton({
  handleClickOpenSession,
  positionX,
  color,
  direction,
  top,
  label,
}: SliderButtonProp) {
  return (
    <>
      {top ? (
        <button
          onClick={() => handleClickOpenSession()}
          style={{
            top: `${top}px`,
            left: direction === "left" ? `${positionX}px` : "",
            right: direction === "right" ? `${positionX}px` : "",
          }}
          className={`absolute w-12 h-12 bg-${color}-400 rounded-full`}
        >
          {label}
        </button>
      ) : (
        <button
          onClick={() => handleClickOpenSession()}
          style={{
            left: `${positionX}px`,
            transitionDelay: "250ms",
            transition: "all 1s ease-out",
          }}
          className={
            color
              ? `absolute w-12 h-12 bg-${color}-400 rounded-full p-6`
              : `absolute w-12 h-12 bg-red-400 rounded-full p-6`
          }
        ></button>
      )}
    </>
  );
}
