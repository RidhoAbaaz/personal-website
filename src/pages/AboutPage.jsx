import { useContext } from "react";
import Title from "../components/Title/Title";
import './AboutPage.css'
import { NavigationContext } from "../contexts/NavigationContext";
import Button from "../components/Button/Button";

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
        </section>
    )
}