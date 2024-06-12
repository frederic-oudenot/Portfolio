"use client";
import MainButton from "@/components/buttons/MainButton";
import listMenu from "@/constants/listMenu";
import { useAppDispatch } from "@/hooks/Redux";
import { openWindow, closeAllWindows } from "@/store/reducers/windowSlice";

export default function NavBar() {
  const dispatch = useAppDispatch();

  function handleOpenWindow(WindowId: string) {
    dispatch(openWindow(WindowId));
  }

  function handleCloseAllWindows(buttonId: string) {
    dispatch(closeAllWindows());
  }

  return (
    <>
      <nav className={`flex-row content-center w-dvw h-10 bg-slate-50 p-2 max-md:hidden`}>
        <div className="flex items-center text-black gap-x-4">
          <i
            id="apple-button"
            onClick={() => handleCloseAllWindows("apple-button")}
            className="devicon-apple-original"
          />
          {listMenu.map((menu: any, index: number) => (
            <MainButton
              handleOpenWindow={() => handleOpenWindow(menu?.id)}
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
