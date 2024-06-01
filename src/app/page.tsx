"use client";

import Footer from "../containers/footer/Footer";
import NavBar from "../containers/header/NavBar";
import Session from "../containers/session/Session";
import { useState } from "react";
import Window from "../sections/window/Window";

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
        <main className="bg-fixed bg-cover h-screen bg-[url('/wallpaper.jpg')]">
          {display ? (
            <>
              <NavBar />
              <Window />
              <Footer />
            </>
          ) : null}
        </main>
      </div>
    </>
  );
}
