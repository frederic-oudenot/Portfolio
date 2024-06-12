import allSocialMedia from "@/constants/allSocialMedia";
import SideHeader from "../header/SideHeader";
import allProjects from "@/constants/allProjects";
import SideBarButton from "@/components/buttons/SideBarButton";
import { familyWallpaper } from "@/constants/allWallpapers";
interface SidebarProp {
  id: string;
  windowId: string;
  isReduce?: boolean;
}
export default function Sidebar({ windowId, id, isReduce }: SidebarProp) {
  function renderSideBar(windowId: string) {
    switch (windowId) {
      case "portfolio":
        return allProjects.map((project, index) => (
          <SideBarButton
            key={index}
            isProject={true}
            id={project?.id}
            label={project?.name}
            source={project?.src}
          />
        ));
      case "settings":
        return familyWallpaper.map((family, index) => (
          <SideBarButton
            key={index}
            isProject={false}
            id={family.id}
            label={family.name}
            source={family?.src}
          />
        ));
      default:
        return allSocialMedia.map((social, index) => (
          <SideBarButton
            key={index}
            url={social.url}
            id={social.id}
            label={social.label}
            source={social.source}
          />
        ));
    }
  }
  return (
    <aside className="sticky top-0 h-full w-48 bg-white-700[.06] overflow-hidden max-md:w-16">
      <SideHeader id={`side-header-${windowId}`} windowId={windowId} />

      {isReduce && id ? null : renderSideBar(windowId)}
    </aside>
  );
}
