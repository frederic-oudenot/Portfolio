interface MainButtonProps {
  label: string;
}
export default function MainButton({ label }: MainButtonProps) {
  return (
    <button className="outline rounded-md outline-offset-1 outline-white-500 p-1">
      {label}
    </button>
  );
}
