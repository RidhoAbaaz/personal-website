import { useContext, useEffect } from 'react'
import TechCard from '../components/Card/Tech/TechCard'
import Title from '../components/Title/Title'
import './PortofolioPage.css'
import { NavigationContext } from '../contexts/NavigationContext'
import ProjectCard from '../components/Card/Project/ProjectCard'
import TitleCard from '../components/Card/Skill/TitleCard'
import travelMate from '../assets/images/travelmate.png';
import zoopedia from '../assets/images/zoopedia.png';
import certif_1 from '../assets/images/certi-1.png';
import certif_2 from '../assets/images/certi-2.png';
import certif_3 from '../assets/images/certi-3.png';
import certif_4 from '../assets/images/certi-4.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import hapi from '../assets/images/hapi.png';
import gcp from '../assets/images/gcp.png';
import mysql from '../assets/images/mysql.png';
import prisma from '../assets/images/prisma.png';

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

    useEffect(() => {
        if (buttonRef.current[0]) {
            buttonRef.current[0].style.background = "rgba(255, 255, 255, 0.5)";
        }
    }, [buttonRef]);

    if (projects) {
        component = (
            <div className='projectView'>
                <div className='componentView'>
                    <ProjectCard image={travelMate} tittle="Travel Mate" description="Travel Mate is an application designed to provide travel destination recommendations in Indonesia based on user preferences" link="https://github.com/RidhoAbaaz/travelmate">
                        <TitleCard text="Javascript"/>
                        <TitleCard text="Kotlin"/>
                        <TitleCard text="Python"/>
                        <TitleCard text="Node.js"/>
                        <TitleCard text="Google Cloud Services"/>
                        <TitleCard text="Hapi.js"/>
                        <TitleCard text="Tensorflow"/>
                        <TitleCard text="Google Collab"/>
                    </ProjectCard>
                    <ProjectCard image={zoopedia} tittle="zoopedia" description="Zoopedia is a simple, child-friendly app that provides an engaging animal encyclopedia with a colorful and easy-to-use design" link="https://github.com/RidhoAbaaz/kelompok-6-front-end">
                        <TitleCard text="PHP"/>
                        <TitleCard text="Flutter"/>
                        <TitleCard text="Laravel"/>
                        <TitleCard text="Google Cloud Services"/>
                        <TitleCard text="MySQL"/>
                    </ProjectCard>
                </div>
                <a className='projectButton' href='https://github.com/RidhoAbaaz' target='_blank'>See Detail <i className="bi bi-arrow-up-right"></i></a>
            </div>
        )
    }

    if (certification) {
        component = (
            <div className='certificationView'>
                <div className="certificationWrap">
                    <img src={certif_1} alt="certification" />
                    <img src={certif_2} alt="certification" />
                    <img src={certif_3} alt="certification" />
                    <img src={certif_4} alt="certification" />
                </div>
                <a href='https://www.linkedin.com/in/ridho-abdul-aziz-509b43303/details/certifications/' target='_blank'>See Detail <i className="bi bi-arrow-up-right"></i></a>
            </div>
        )
    }

    if (stack) {
        component = (
            <div className='techView'>
                <TechCard image={html} />
                <TechCard image={css} />
                <TechCard image={js} />
                <TechCard image={gcp} />
                <TechCard image={react} />
                <TechCard image={nodejs} />
                <TechCard image={hapi} />
                <TechCard image={prisma}/>
                <TechCard image={mysql} />
            </div>
        )
    }

    return (
        <div className="portofoliopage" ref={portofolio}>
            <Title text="Portofolio" width="180px" />
            <div className="buttonWrap">
                {
                    buttonType.map((el, index) => (
                            <button key={el} ref={(el) => (buttonRef.current[index] = el)} onClick={() => handleClick(index, el)}>
                                <i className={`bi bi-${el === "projects" ? "gear" : el === "certification" ? "trophy" : "stack"}`}></i>
                                <p>{el}</p>
                            </button>
                        )
                    )
                }
            </div>
            {component}
        </div>
    )
}