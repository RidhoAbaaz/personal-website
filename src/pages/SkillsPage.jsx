import Title from "../components/Title/Title";
import './SkillsPage.css'
import Skill from "../components/Skill/Skill";
import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

export default function SkillsPage() {
    const { skill } = useContext(NavigationContext);
    return (
        <section className="skillpage" ref={skill}>
            <div className="skills-wrapper">
                <Title text="My Skills" width="162px"/>
                <p>FROM MY JOURNEY AS INFORMATICS STUDENT I HAVE KIND OF SKILLS</p>
                <div className="skill-content-wrapper">
                    <div className="soft-skill">
                        <h5 className="skill-title">Soft Skill</h5>
                        <Skill text="Critical Thinking" />
                        <Skill text="Problem Solving" />
                        <Skill text="Project Management" />
                        <Skill text="Time Management" />
                    </div>
                    <div className="tech-skill">
                        <h5 className="skill-title">Tech Skill</h5>
                        <Skill text="Backend Developer" />
                        <Skill text="Cloud Engineer" />
                        <Skill text="Frontend Developer" />
                    </div>
                    <div className="programing-language">
                        <h5 className="skill-title">Programing Language</h5>
                        <Skill text="HTML" />
                        <Skill text="CSS" />
                        <Skill text="Javascript" />
                        <Skill text="React" />
                    </div>
                </div>
            </div>
        </section>
    )
}