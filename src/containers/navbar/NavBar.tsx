"use client";
import MainButton from "@/components/buttons/MainButton";
import listMenu from "@/constants/listMenu";

interface NavBarProp {
  handleOpenWindow: (id: string, isOpen: boolean) => void;
  closeAllWindows: (isAllClose: boolean) => void;
}

export default function NavBar({
  handleOpenWindow,
  closeAllWindows,
}: NavBarProp) {
  return (
    <>
      <nav className={`flex-row content-center w-dvw h-10 bg-slate-50 p-2`}>
        <div className="flex items-center text-black gap-x-4">
          <i
            onClick={() => closeAllWindows(true)}
            className="devicon-apple-original"
          />
          {listMenu.map((menu: any, index: number) => (
            <MainButton
              handleOpenWindow={() => handleOpenWindow(menu?.id, true)}
              id={`button-${menu.id}`}
              key={`button-${index}`}
              label={menu?.name}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
