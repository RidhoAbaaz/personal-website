import { useContext } from 'react'
import TechCard from '../components/Card/Tech/TechCard'
import Title from '../components/Title/Title'
import './PortofolioPage.css'
import { NavigationContext } from '../contexts/NavigationContext'
import ProjectCard from '../components/Card/Project/ProjectCard'
import TitleCard from '../components/Card/Skill/TitleCard'

export default function PortofolioPage() {
    const { portofolio, projects, certification, stack, setProjects, setCertification, setStack, buttonRef } = useContext(NavigationContext);
    const buttonType = ["projects", "certification", "stack"];
    let component;


    const handleClick = (index, type) => {
        setProjects(type === "projects");
        setCertification(type === "certification");
        setStack(type === "stack");

        buttonRef.current.forEach((btn, idx) => {
            if (btn) btn.style.background = idx === index ? "rgba(255, 255, 255, 0.5)" : "transparent";
        });
    };

    if (projects) {
        component = (
            <div className='componentView'>
                <ProjectCard image="/images/travelmate.png" tittle="Travel Mate" description="Travel Mate is an application designed to provide travel destination recommendations in Indonesia based on user preferences" link="https://github.com/RidhoAbaaz/travelmate">
                    <TitleCard text="Javascript"/>
                    <TitleCard text="Kotlin"/>
                    <TitleCard text="Python"/>
                    <TitleCard text="Node.js"/>
                    <TitleCard text="Google Cloud Services"/>
                    <TitleCard text="Hapi.js"/>
                    <TitleCard text="Tensorflow"/>
                    <TitleCard text="Google Collab"/>
                </ProjectCard>
                <ProjectCard image="/images/zoopedia.png" tittle="zoopedia" description="Zoopedia is a simple, child-friendly app that provides an engaging animal encyclopedia with a colorful and easy-to-use design" link="https://github.com/RidhoAbaaz/kelompok-6-front-end">
                    <TitleCard text="PHP"/>
                    <TitleCard text="Flutter"/>
                    <TitleCard text="Laravel"/>
                    <TitleCard text="Google Cloud Services"/>
                    <TitleCard text="MySQL"/>
                </ProjectCard>
            </div>
        )
    }

    if (certification) {
        component = (
            <div className='certificationView'>
                <div className="certificationWrap">
                    <img src="/images/certi-1.png" alt="certification" />
                    <img src="/images/certi-2.png" alt="certification" />
                    <img src="/images/certi-3.png" alt="certification" />
                    <img src="/images/certi-4.png" alt="certification" />
                </div>
                <a href='https://www.linkedin.com/in/ridho-abdul-aziz-509b43303/details/certifications/' target='_blank'>See Detail <i className="bi bi-arrow-up-right"></i></a>
            </div>
        )
    }

    if (stack) {
        component = (
            <div className='techView'>
                <TechCard image="/images/html.png" />
                <TechCard image="/images/css.png" />
                <TechCard image="/images/js.png" />
                <TechCard image="/images/gcp.png" />
                <TechCard image="/images/react.png" />
                <TechCard image="/images/nodejs.png" />
                <TechCard image="/images/hapi.png" />
                <TechCard image="/images/prisma.png" />
                <TechCard image="/images/mysql.png" />
            </div>
        )
    }

    return (
        <div className="portofoliopage" ref={portofolio}>
            <Title text="Portofolio" width="180px" />
            <div className="buttonWrap">
                {
                    buttonType.map((el, index) => {
                        return (
                            <button key={el} ref={(el) => (buttonRef.current[index] = el)} onClick={() => handleClick(index, el)}>
                                <i className={`bi bi-${el === "projects" ? "gear" : el === "certification" ? "trophy" : "stack"}`}></i>
                                <p>{el}</p>
                            </button>
                        )
                    })
                }
            </div>
            {component}
        </div>
    )
}