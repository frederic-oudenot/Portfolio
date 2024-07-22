"use client";
import MainButton from "@/components/buttons/MainButton";
import IconLanguage from "@/components/icons/IconLanguage";
import listMenu from "@/constants/listMenu";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { changeLanguage } from "@/store/reducers/languageSlice";
import { openWindow, closeAllWindows } from "@/store/reducers/windowSlice";

export default function NavBar() {
  // Returning language selected by user
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  // Returning dispatch from Redux
  const dispatch = useAppDispatch();
  // Function pour ouvrir des fenetres et les prioriser
  function handleOpenWindow(WindowId: string) {
    dispatch(openWindow(WindowId));
  }
  //Fermer toutes les fenetres
  function handleCloseAllWindows(buttonId: string) {
    dispatch(closeAllWindows());
  }
  //Fonction changer la langue
  function handleClick(language: string) {
    dispatch(changeLanguage(language));
  }
  return (
    <>
      <nav
        className={`flex-row content-center w-dvw h-12 bg-slate-50 p-2 max-md:hidden`}
      >
        <div className="flex items-center text-black gap-x-4 cursor-pointer">
          <i
            id="apple-button"
            onClick={() => handleCloseAllWindows("apple-button")}
            className="devicon-apple-original hover:scale-105"
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
        <div className=" absolute top-2 right-10 flex gap-3 ">
          <IconLanguage
            handleClick={() => handleClick("fr-FR")}
            id="language-french"
            src={
              "https://img.icons8.com/?size=30&id=3muzEmi4dpD5&format=png&color=000000"
            }
            width={1}
            height={1}
          />
          <IconLanguage
            handleClick={() => handleClick("en-EN")}
            id="language-english"
            src={
              "https://img.icons8.com/?size=30&id=t3NE3BsOAQwq&format=png&color=000000"
            }
            width={8}
            height={8}
          />
        </div>
      </nav>
    </>
  );
}
