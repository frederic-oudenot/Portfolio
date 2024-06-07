import Link from "next/link";

interface MainButtonProps {
  id: string;
  label: string;
  link?: string;
  handleOpenWindow?: () => void;
}
export default function MainButton({
  id,
  label,
  link,
  handleOpenWindow,
}: MainButtonProps) {
  return (
    <>
      {link ? (
        <Link
          id={id}
          className="outline rounded-md outline-offset-1 outline-white-500 p-1 hover:bg-indigo-500"
          target="_blank"
          href={link}
        >
          {label}
        </Link>
      ) : (
        <button
          id={id}
          onClick={handleOpenWindow}
          className="text-black"
        >
          {label}
        </button>
      )}
    </>
  );
}
