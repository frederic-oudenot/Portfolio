import Image from "next/image";

interface MenuButtonProps {
  handleOpenWindow: (windowId: string) => void;
  button: {
    id: string;
    label: string;
    src: string;
  };
}

export default function MenuButton({
  handleOpenWindow,
  button,
}: MenuButtonProps) {
  return (
    <div id="menu-icon" aria-label="menu-icon">
      <button
        className={"hover:animate-bounce"}
        onClick={() => handleOpenWindow(button.id)}
        id={button.id}
      >
        <Image
          width={80}
          height={80}
          aria-label={button.label}
          src={button.src}
          alt={button.label}
        />
      </button>
    </div>
  );
}
