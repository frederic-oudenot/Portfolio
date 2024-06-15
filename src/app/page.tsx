"use client";
import { useEffect, useState } from "react";
import Session from "@/containers/session/Session";
import Window from "@/sections/window/Window";
import listMenu from "@/constants/listMenu";
import NavBar from "@/containers/navbar/NavBar";
import Footer from "@/containers/footer/Footer";
import { useAppSelector } from "@/hooks/Redux";
import Modal from "@/containers/modal/Modal";

export default function Home() {
  // useState pour afficher la session mac
  const [display, SetDisplay] = useState<Boolean>(false);
  // Fournir le wallpaper initial lors du chargement de la web app
  const wallpaper = useAppSelector((state) => state.wallpaper.wallpaper);
  // Fournir le wallapaper lors d'un choix d'un utilisateur
  const selectedwallpaper = useAppSelector(
    (state) => state.wallpaper.selectedWallpaper
  );

  // Chargement selon variable display
  useEffect(() => {
    // Si display = true, modification et ouverture de la session
    if (display) {
      // Récupération de l'élément flouté
      const blurElement = document.getElementById("blur");
      //Récupération de l'élément de session
      const sessionElement = document.getElementById("session");
      // Retirer la classe et le fou initiale
      blurElement!.classList.remove("blur-md");
      //Retirer le composant session
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
          className={`overflow-hidden size-full relative bg-center bg-cover h-screen m-auto`}
        >
          {display ? (
            <>
              <NavBar />
              <Modal />
              {listMenu.map((menu, index) => (
                <Window key={index} id={menu.id} />
              ))}
              <Footer />
            </>
          ) : null}
        </main>
      </div>
    </>
  );
}
