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
  const router = useRouter();

  function handleClickSocialMedia() {
    router.push(url);
  }
  return (
    <>
      <button
        id={id}
        onClick={() => handleClickSocialMedia()}
        className="flex flex-row w-full h-16 text-black justify-start items-center px-5 gap-2"
      >
        <Image width={30} height={30} src={source} alt={label} />
        {label}
      </button>
      <hr />
    </>
  );
}
