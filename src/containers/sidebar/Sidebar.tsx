import allSocialMedia from "@/constants/allSocialMedia";
import SideHeader from "../header/SideHeader";
import SideBarButton from "@/components/buttons/SideBarButton";
import { familyWallpaper } from "@/constants/allWallpapers";
import { useAppSelector } from "@/hooks/Redux";
interface SidebarProp {
  id: string;
  windowId: string;
  isReduce?: boolean;
}
export default function Sidebar({ windowId, id, isReduce }: SidebarProp) {
  function renderSideBar(windowId: string) {
    switch (windowId) {
      case "portfolio":
        const allProjects = useAppSelector(
          (state) => state.languages.initialLanguage.ProjectsPage
        );
        return allProjects.map((project: any, index: number) => (
          <SideBarButton
            key={index}
            isProject={true}
            id={project?.id}
            label={project?.name}
            source={project?.src}
          />
        ));
      case "settings":
        const familyWallpaper = useAppSelector(
          (state) => state.languages.initialLanguage.familyWallpaper
        );
        return familyWallpaper.map((family: any, index: number) => (
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
    <aside className="sticky top-0 h-full w-48 bg-white-700[.06] max-md:w-16">
      <SideHeader id={`side-header-${windowId}`} windowId={windowId} />

      {isReduce && id ? null : renderSideBar(windowId)}
    </aside>
  );
}
