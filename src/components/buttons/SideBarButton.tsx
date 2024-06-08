import Image from "next/image";
import SubTitle from "../typography/SubTitle";
import { useAppDispatch } from "@/hooks/Redux";
import { changeProject } from "@/store/reducers/projectsSlice";

interface SideBarButtonProp {
  id: string;
  label: string;
  source: string;
  url?: string;
}

export default function SideBarButton({
  id,
  url,
  label,
  source,
}: SideBarButtonProp) {
  const dispatch = useAppDispatch();
  function handleOpenProject(projectId: string) {
    dispatch(changeProject(projectId));
  }
  return (
    <>
      {url ? (
        <a
          href={url}
          target="_blank"
          id={id}
          className="flex flex-row w-full h-16 justify-start items-center px-5 gap-2"
        >
          <Image width={30} height={30} src={source} alt={label} />
          <SubTitle name={label} variant={"black"} />
        </a>
      ) : (
        <button
          onClick={() => handleOpenProject(id)}
          id={id}
          className="flex flex-row w-full h-16 justify-start items-center px-5 gap-2"
        >
          <Image width={30} height={30} src={source} alt={label} />
          <SubTitle name={label} variant={"black"} />
        </button>
      )}

      <hr />
    </>
  );
}
