import { useCallback } from "react";
import SocialButton from "@/components/buttons/SocialButton";
import allSocialMedia from "@/constants/allSocialMedia";
import SideHeader from "../header/SideHeader";
import allProjects from "@/constants/allProjects";
import Title from "@/components/typography/Title";
interface SidebarProp {
  id: string;
}
export default function Sidebar({ id }: SidebarProp) {
  const selectedFunctionWindow = useCallback((buttonId: string) => {}, []);

  return (
    <aside className="sticky top-0 h-full w-60 bg-white-700[.06]">
      <SideHeader handleClick={selectedFunctionWindow} />
      {id === "sidebar-about" &&
        allSocialMedia.map((social, index) => (
          <SocialButton
            key={index}
            url={social?.url}
            id={social?.id}
            label={social?.label}
            source={social?.source}
          />
        ))}
      {id === "sidebar-portfolio" &&
        allProjects.map((project, index) => (
          <Title
            key={index}
            id={project?.id}
            content={project?.name}
            variant={"black"}
          />
        ))}
    </aside>
  );
}
