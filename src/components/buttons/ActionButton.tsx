import { useState } from "react";

interface ActionButtonProp {
  id: string;
  color: string;
  handleClick: (id: string) => void;
}

export default function ActionButton({
  id,
  color,
  handleClick,
}: ActionButtonProp) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function onMouseEnter() {
    setIsHovered(true);
  }

  return (
    <button
      onClick={() => handleClick(id)}
      onMouseEnter={() => onMouseEnter()}
      id={id}
      className={`flex rounded-full w-3 h-3 ${color} place-content-center`}
    ></button>
  );
}
