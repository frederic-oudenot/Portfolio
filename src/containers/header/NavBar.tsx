"use client";
import Link from "next/link";

interface NavBarProp {
  handleOpenWindow: (id:string,isOpen:boolean)=>void;
}

export default function NavBar({ handleOpenWindow }: NavBarProp) {
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
      <nav className={`flex-row content-center w-dvw h-10 bg-slate-50 p-2 $`}>
        <div className="flex items-center text-black gap-4">
          <i className="devicon-apple-original" />
          {listMenu.map((menu) => (
            <Link
              id={menu.id}
              href={menu.link}
              aria-label={menu.name}
              onClick={() => handleOpenWindow(menu.id, true)}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
