import { useContext } from "react";
import Title from "../components/Title/Title";
import './AboutPage.css'
import { NavigationContext } from "../contexts/NavigationContext";
import Button from "../components/Button/Button";
import AboutCard from "../components/Card/About/AboutCard";

export default function AboutPage() {
    const { about } = useContext(NavigationContext);

    return (
        <section className="aboutpage" ref={about}>
            <Title text="About Me" width="170px"/>
            <div className="content-wrapper">
                <img src="/images/Ridho.jpg" alt="Ridho" className="img"/>
                <div className="content">
                    <p className="description-text">I am undergraduate Informatics student with a strong interest in full stack development and cloud computing. I enjoy exploring technologies that enable me to create integrated and impactful solutions, from frontend to backend, as well as managing applications on cloud infrastructure. <br /> <br /> With a combination of skills in full stack development and cloud computing, I am committed to continuous learning and contributing to innovative projects. I am open to discussions, collaborations, or career opportunities in the tech field. Feel free to connect with me!</p>
                    <Button text="Download CV">
                        <i className="bi bi-file-earmark-person"></i>
                    </Button>
                </div>
            </div>
            <div className="about-card">
                <AboutCard title="Projects" number="2" icon="bi bi-gear" project={true} index={0} />
                <AboutCard title="Certifications" number="30" icon="bi bi-trophy" certification={true} index={1} />
                <AboutCard title="Tech Stack" number="7" icon="bi bi-stack" stack={true} index={2} />
            </div>
        </section>
    )
}