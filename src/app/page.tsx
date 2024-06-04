"use client";

import Footer from "../containers/footer/Footer";
import NavBar from "../containers/header/NavBar";
import Session from "../containers/session/Session";
import { useState } from "react";
import Window from "../sections/window/Window";

export default function Home() {
  const [display, SetDisplay] = useState<Boolean>(false);
  const [openWindow, SetOpenWindow] = useState<any>();

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
  return (
    <>
      <Session handleClick={handleClick} />
      <div id="blur" className="blur-md">
        <main className="relative bg-fixed bg-cover h-screen bg-[url('/wallpaper.jpg')]">
          {display ? (
            <>
              <NavBar handleOpenWindow={handleOpenWindow} />
              <Window id={openWindow?.id} isOpen={openWindow?.isOpen} />
              <Footer />
            </>
          ) : null}
        </main>
      </div>
    </>
  );
}
