import { useCallback } from "react";
import SocialButton from "@/components/buttons/SocialButton";
import allSocialMedia from "@/constants/allSocialMedia";
import SideHeader from "../header/SideHeader";

export default function Sidebar() {
  const selectedFunctionWindow = useCallback((buttonId: string) => {}, []);

  return (
    <aside className="sticky top-0 h-full w-60 bg-white-700[.06]">
      <SideHeader handleClick={selectedFunctionWindow} />
      {allSocialMedia.map((social, index) => (
        <SocialButton
          key={index}
          url={social?.url}
          id={social?.id}
          label={social?.label}
          source={social?.source}
        />
      ))}
    </aside>
  );
}
