"use client";
import { useState } from "react";
import Session from "@/containers/session/Session";
import Window from "@/sections/window/Window";
import listMenu from "@/constants/listMenu";
import NavBar from "@/containers/navbar/NavBar";

export default function Home() {
  const [display, SetDisplay] = useState<Boolean>(false);

  function handleClick() {
    const blurElement = document.getElementById("blur");
    const sessionElement = document.getElementById("session");
    blurElement!.classList.remove("blur-md");
    sessionElement!.style.display = "none";
    SetDisplay(true);
  }

  return (
    <>
      <Session handleClick={handleClick} />
      <div id="blur" className="blur-md">
        <main className="relative bg-fixed bg-cover h-screen bg-[url('/wallpaper.jpg')]">
          {display ? (
            <>
              <NavBar />
              {listMenu.map((menu, index) => (
                <Window key={index} id={menu.id} />
              ))}
            </>
          ) : null}
        </main>
      </div>
    </>
  );
}
