"use client";

import Footer from "@/containers/footer/Footer";
import Session from "@/containers/session/Session";
import { useState } from "react";
import Window from "@/sections/window/Window";
import listMenu from "@/constants/listMenu";
import NavBar from "@/containers/navbar/NavBar";

export default function Home() {
  const [display, SetDisplay] = useState<Boolean>(false);
  const [openWindow, SetOpenWindow] = useState<any>(false);

  function handleClick() {
    const blurElement = document.getElementById("blur");
    const sessionElement = document.getElementById("session");
    blurElement!.classList.remove("blur-md");
    sessionElement!.style.display = "none";
    SetDisplay(true);
  }

  function handleOpenWindow(id: string, isOpen: boolean) {
    SetOpenWindow({ id: id, isOpen: isOpen });
  }

  function closeAllWindows(isAllClose: boolean) {
    listMenu.map((menu) =>
      SetOpenWindow({ id: menu?.id, isOpen: !isAllClose })
    );
  }

  return (
    <>
      <Session handleClick={handleClick} />
      <div id="blur" className="blur-md">
        <main className="relative bg-fixed bg-cover h-screen bg-[url('/wallpaper.jpg')]">
          {display ? (
            <>
              <NavBar
                handleOpenWindow={handleOpenWindow}
                closeAllWindows={closeAllWindows}
              />
              {listMenu.map((menu, index) => (
                <Window
                  key={index}
                  handleOpenWindow={handleOpenWindow}
                  id={menu.id}
                  isOpen={menu.id === openWindow?.id && openWindow?.isOpen}
                  //isOpen={menu.id === "about" && true}
                />
              ))}
            </>
          ) : null}
        </main>
      </div>
    </>
  );
}
