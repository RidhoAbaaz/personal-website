import { useRef } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import PortofolioPage from "./PortofolioPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";

export default function PersonalWebsite () {
    const home = useRef(null);
    const about = useRef(null);
    const skill = useRef(null);
    const portofolio = useRef(null);
    const contact = useRef(null);

    return (
        <NavigationContext.Provider value={{ home, about, skill, portofolio, contact }}>
            <HomePage />
            <AboutPage />
            <SkillsPage />
            <PortofolioPage />
            <ContactPage />
        </NavigationContext.Provider>
    )
}