"use client";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../../components/buttons/MenuButtons";

export default function NavBar() {
  const [classHidden, setClassHidden] = useState<string>("hidden");

  function handleOpenMenu() {
    console.log(classHidden);
    classHidden !== "hidden"
      ? setClassHidden("hidden")
      : setClassHidden("block");
  }
  return (
    <>
      <nav className="flex w-dvw h-100">
        <MenuButton handleOpenMenu={handleOpenMenu} />
        <div className={classHidden}>
          <ul>
            <Link href={"#home"}>Home</Link>
          </ul>
          <ul>
            <Link href={"#about"}>About</Link>
          </ul>
          <ul>
            <Link href={"#portfolio"}>Portfolio</Link>
          </ul>
          <ul>
            <Link href={"#contact"}>Contact</Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
