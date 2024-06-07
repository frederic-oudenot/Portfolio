import { useCallback } from "react";
import SocialButton from "@/components/buttons/SocialButton";
import allSocialMedia from "@/constants/allSocialMedia";
import SideHeader from "../header/SideHeader";
import allProjects from "@/constants/allProjects";
interface SidebarProp {
  id: string;
}
export default function Sidebar({ id }: SidebarProp) {
  const selectedFunctionWindow = useCallback((buttonId: string) => {}, []);

  return (
    <aside className="sticky top-0 h-full w-48 bg-white-700[.06] max-md:w-16">
      <SideHeader handleClick={selectedFunctionWindow} />

      {id === "sidebar-portfolio"
        ? allProjects.map((project, index) => (
            <SocialButton
              key={index}
              url={project?.url}
              id={project?.id}
              label={project?.name}
              source={project?.src}
            />
          ))
        : allSocialMedia.map((social, index) => (
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
