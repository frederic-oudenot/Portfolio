"use client";
import { useEffect, useState } from "react";
import Session from "@/containers/session/Session";
import Window from "@/sections/window/Window";
import listMenu from "@/constants/listMenu";
import NavBar from "@/containers/navbar/NavBar";
import Footer from "@/containers/footer/Footer";
import { useAppSelector } from "@/hooks/Redux";

export default function Home() {
  const [display, SetDisplay] = useState<Boolean>(false);
  const wallpaper = useAppSelector((state) => state.wallpaper.wallpaper);
  const selectedwallpaper = useAppSelector(
    (state) => state.wallpaper.selectedWallpaper
  );

  useEffect(() => {
    if (display) {
      const blurElement = document.getElementById("blur");
      const sessionElement = document.getElementById("session");
      blurElement!.classList.remove("blur-md");
      sessionElement!.style.display = "none";
    }
  }, [display]);

  return (
    <>
      <Session SetDisplay={SetDisplay} />
      <div id="blur" className="blur-md">
        <main
          style={
            selectedwallpaper
              ? {
                  backgroundImage: `url(${selectedwallpaper.src})`,
                  transitionDelay: "250ms",
                }
              : { backgroundImage: `url(${wallpaper.src})` }
          }
          className={`relative bg-center bg-cover h-screen m-auto`}
        >
          {display ? (
            <>
              <NavBar />
              {listMenu.map((menu, index) => (
                <Window  key={index} id={menu.id} />
              ))}
              <Footer />
            </>
          ) : null}
        </main>
      </div>
    </>
  );
}
