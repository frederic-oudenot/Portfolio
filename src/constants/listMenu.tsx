import AboutSection from "@/sections/about/AboutSection";
import PortfolioSection from "@/sections/portofolio/PortfolioSection";
import InnerWindow from "@/sections/window/InnerWindow";

const listMenu = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
    component: <AboutSection />,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    component: <PortfolioSection />,

  },
  {
    id: "contact",
    name: "Contact",
  },
];

export default listMenu;
