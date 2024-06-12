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
  function onTouchEnd(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      {link ? (
        <Link
          id={id}
          onTouchEnd={() => onTouchEnd(link)}
          className="outline rounded-md outline-offset-1 outline-white-500 p-1 hover:animate-bounce"
          target="_blank"
          href={link}
        >
          {label}
        </Link>
      ) : (
        <button id={id} onClick={handleOpenWindow} className="text-black">
          {label}
        </button>
      )}
    </>
  );
}
