import Image from "next/image";
import { useRouter } from "next/navigation";

interface SocialButtonProp {
  id: string;
  url: string;
  label: string;
  source: string;
}

export default function SocialButton({
  id,
  url,
  label,
  source,
}: SocialButtonProp) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        id={id}
        className="flex flex-row w-full h-16 text-black justify-start items-center px-5 gap-2"
      >
        <Image width={30} height={30} src={source} alt={label} />
        {label}
      </a>
      <hr />
    </>
  );
}
