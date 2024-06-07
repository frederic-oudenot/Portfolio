import Image from "next/image";
import { useRouter } from "next/navigation";
import SubTitle from "../typography/SubTitle";

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
        className="flex flex-row w-full h-16 justify-start items-center px-5 gap-2"
      >
        <Image width={30} height={30} src={source} alt={label} />
        <SubTitle name={label} variant={"black"}/>
        
      </a>
      <hr />
    </>
  );
}
