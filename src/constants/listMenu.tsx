import AboutSection from "@/sections/about/AboutSection";
import ContactSection from "@/sections/contact/ContactSection";
import PortfolioSection from "@/sections/portofolio/PortfolioSection";
import SettingsSession from "@/sections/settings/SettingsSession";

const listMenu = [
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
  {
    id: "settings",
    name: "Settings",
    component: <SettingsSession />,
  },
];

export default listMenu;
