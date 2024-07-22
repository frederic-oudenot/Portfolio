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
  // Function : rendering sidebar according selection by user
  function renderSideBar(windowId: string) {

    switch (windowId) {
      // rendering sidebar portfolio
      case "portfolio":
        // Returning data from Redux
        const allProjects = useAppSelector(
          (state) => state.languages.initialLanguage.ProjectsPage
        );
        // Rendering side bar according all datas
        return allProjects.map((project: any, index: number) => (
          <SideBarButton
            key={index}
            isProject={true}
            id={project?.id}
            label={project?.name}
            source={project?.src}
          />
        ));
      // rendering sidebar settings
      case "settings":
        // Returning data from Redux
        const familyWallpaper = useAppSelector(
          (state) => state.languages.initialLanguage.familyWallpaper
        );
        // Rendering side bar according all datas
        return familyWallpaper.map((family: any, index: number) => (
          <SideBarButton
            key={index}
            isProject={false}
            id={family.id}
            label={family.name}
            source={family?.src}
          />
        ));
      // rendering sidebar by default
      default:
        // Rendering side bar according all datas social network
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
