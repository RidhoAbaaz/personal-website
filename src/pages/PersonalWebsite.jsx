import { useRef, useState } from "react";
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
    const buttonRef = useRef(["projects"]);

    const [projects, setProjects] = useState(true);
    const [certification, setCertification] = useState(false);
    const [stack, setStack] = useState(false);

    return (
        <NavigationContext.Provider value={{ home, about, skill, portofolio, contact, projects, certification, stack, setProjects, setCertification, setStack, buttonRef }}>
            <HomePage />
            <AboutPage />
            <SkillsPage />
            <PortofolioPage />
            <ContactPage />
        </NavigationContext.Provider>
    )
}