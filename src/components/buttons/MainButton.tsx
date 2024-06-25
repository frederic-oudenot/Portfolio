import Link from "next/link";

interface MainButtonProps {
  id: string;
  label: string | undefined;
  link?: string;
  handleOpenWindow?: () => void;
}
export default function MainButton({
  id,
  label,
  link,
  handleOpenWindow,
}: MainButtonProps) {
  // Permettre d'ouvrier les fenetres en mode tablette ou mobile
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
        <button
          id={id}
          onClick={handleOpenWindow}
          className="text-black right-10 hover:scale-105"
        >
          {label}
        </button>
      )}
    </>
  );
}
