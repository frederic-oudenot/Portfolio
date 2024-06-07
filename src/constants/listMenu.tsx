import AboutSection from "@/sections/about/AboutSection";
import ContactSection from "@/sections/contact/ContactSection";
import PortfolioSection from "@/sections/portofolio/PortfolioSection";

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
    component: <ContactSection />,
  },
];

export default listMenu;
