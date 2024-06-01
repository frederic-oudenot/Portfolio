interface ActionButtonProp {
  id: string;
  color: string;
}

export default function ActionButton({ id, color }: ActionButtonProp) {
  return <button id={id} className={`rounded-full w-3 h-3 ${color}`}></button>;
}
