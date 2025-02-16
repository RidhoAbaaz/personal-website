import { useContext } from "react";
import Navigator from "../components/Navigator/Navigator";
import Title from "../components/Title/Title";
import './AboutPage.css'
import { NavigationContext } from "../contexts/NavigationContext";

export default function AboutPage() {
    const { about } = useContext(NavigationContext);
    return (
        <section className="aboutpage" ref={about}>
            <div className="about-wrapper">
                <Title text="About Me" width="170px"/>
                <div className="content-wrapper">
                    <div className="frame">
                        <img src="/images/Ridho.jpg" alt="Ridho" className="img"/>
                    </div>
                    <p className="description-text">I am undergraduate Informatics student with a strong interest in full stack development and cloud computing. I enjoy exploring technologies that enable me to create integrated and impactful solutions, from frontend to backend, as well as managing applications on cloud infrastructure. <br /> <br /> With a combination of skills in full stack development and cloud computing, I am committed to continuous learning and contributing to innovative projects. I am open to discussions, collaborations, or career opportunities in the tech field. Feel free to connect with me!</p>
                    <Navigator />
                </div>
            </div>
        </section>
    )
}