"use client";
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
      <nav className={`flex-row content-center w-dvw h-10 bg-slate-50 p-2 $`}>
        <div className="flex items-center text-black gap-4">
          <i
            onClick={() => closeAllWindows(true)}
            className="devicon-apple-original"
          />
          {listMenu.map((menu, index) => (
            <button
              key={index}
              id={menu.id}
              aria-label={menu.name}
              onClick={() => handleOpenWindow(menu.id, true)}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
