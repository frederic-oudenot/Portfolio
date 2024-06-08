import allSocialMedia from "@/constants/allSocialMedia";
import SideHeader from "../header/SideHeader";
import allProjects from "@/constants/allProjects";
import SideBarButton from "@/components/buttons/SideBarButton";
interface SidebarProp {
  id: string;
  windowId: string;
}
export default function Sidebar({
  windowId,
  id,
}: SidebarProp) {
  return (
    <aside className="sticky top-0 h-full w-48 bg-white-700[.06] max-md:w-16">
      <SideHeader
        id={`side-header-${windowId}`}
        windowId={windowId}
      />

      {id === "sidebar-portfolio"
        ? allProjects.map((project, index) => (
            <SideBarButton
              key={index}
              id={project?.id}
              label={project?.name}
              source={project?.src}
            />
          ))
        : allSocialMedia.map((social, index) => (
            <SideBarButton
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
