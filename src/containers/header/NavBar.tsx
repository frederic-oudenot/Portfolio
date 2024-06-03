"use client";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../../components/buttons/MenuButtons";

export default function NavBar() {
  const [classHidden, setClassHidden] = useState<string>("");
  console.log("🚀 ~ NavBar ~ classHidden:", classHidden);

  function handleOpenMenu() {
    console.log(classHidden);
    classHidden !== "hidden"
      ? setClassHidden("hidden")
      : setClassHidden("block");
  }

  const listMenu = [
    {
      id: "home",
      link: "#home",
      name: "Home",
    },
    {
      id: "about",
      link: "#about",
      name: "About",
    },
    {
      id: "portfolio",
      link: "#portfolio",
      name: "Portfolio",
    },
    {
      id: "contact",
      link: "#contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <nav
        className={`flex-row content-center w-dvw h-10 bg-slate-50 p-2 ${classHidden}`}
      >
        <div className="flex items-center text-black gap-4">
          <i className="devicon-apple-original" />
          {listMenu.map((menu) => (
            <Link id={menu.id} href={menu.link}>
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
