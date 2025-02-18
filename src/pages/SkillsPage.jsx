import Title from "../components/Title/Title";
import './SkillsPage.css'
// import Skill from "../components/Skill/Skill";
import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import SkillCard from "../components/Card/Skill/SkillCard";
import TitleCard from "../components/Card/Skill/TitleCard";

export default function SkillsPage() {
    const { skill } = useContext(NavigationContext);
    return (
        <section className="skillpage" ref={skill}>
            <Title text="My Skills" width="162px"/>
            <p>From my journey as an Informatics student, I have gained various skills</p>
            <div className="card-skill-wrapper">
                <SkillCard icon="bi bi-braces" title="Front-End Developer" text="Crafting responsive, interactive, and user-friendly web experiences using modern frontend technologies">
                    <TitleCard text="HTML"/>
                    <TitleCard text="CSS"/>
                    <TitleCard text="Javascript"/>
                    <TitleCard text="React"/>
                </SkillCard>
                <SkillCard icon="bi bi-database" title="Back-End Developer" text="Developing backend solutions focused on creating reliable, flexible, and scalable server environments for seamless web application performance">
                    <TitleCard text="Javascript"/>
                    <TitleCard text="Python"/>
                    <TitleCard text="Node.js"/>
                    <TitleCard text="Prisma"/>
                    <TitleCard text="Google Cloud Services"/>
                    <TitleCard text="Hapi.js"/>
                    <TitleCard text="MySQL"/>
                </SkillCard>
                <SkillCard icon="bi bi-cloud" title="Cloud Engineer" text="Designing cloud architectures, configuring cloud environments, and deploying applications to ensure scalability and reliability">
                    <TitleCard text="Google Cloud Platform"/>
                </SkillCard>
            </div>
    </section>
    )
}