import Link from "next/link";

interface MainButtonProps {
  label: string;
  link: string;
}
export default function MainButton({ label, link }: MainButtonProps) {
  return (
    <Link
      className="outline rounded-md outline-offset-1 outline-white-500 p-1 hover:bg-indigo-500"
      target="_blank"
      href={link}
    >
      {label}
    </Link>
  );
}
