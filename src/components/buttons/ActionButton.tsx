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
  return (
    <button
      onClick={() => handleClick(id)}
      id={id}
      className={`rounded-full w-3 h-3 ${color}`}
    ></button>
  );
}
