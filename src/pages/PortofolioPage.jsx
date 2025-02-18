// import CertificationCard from '../components/Card/CertificationCard'
import { useContext, useState } from 'react'
import TechCard from '../components/Card/Tech/TechCard'
import Title from '../components/Title/Title'
import './PortofolioPage.css'
import { NavigationContext } from '../contexts/NavigationContext'
import ProjectCard from '../components/Card/Project/ProjectCard'
import Button from '../components/Button/Button'

export default function PortofolioPage() {
    const [projects, setProjects] = useState(true);
    const [certification, setCertification] = useState(false);
    const [stack, setStack] = useState(false);
    const { portofolio } = useContext(NavigationContext);
    let component;


    if (projects) {
        component = (
            <div className='componentView'>
                <ProjectCard image="/images/travelmate.png" tittle="Travel Mate" description="Travel Mate is an application designed to provide travel destination recommendations in Indonesia based on user preferences"/>
                <ProjectCard image="/images/zoopedia.png" tittle="zoopedia" description="Zoopedia is a simple, child-friendly app that provides an engaging animal encyclopedia with a colorful and easy-to-use design"/>
            </div>
        )
    } else if (certification) {
        component = (
            <div className='certificationView'>
                <div className="certificationWrap">
                    <img src="/images/certi-1.png" alt="certification" />
                    <img src="/images/certi-1.png" alt="certification" />
                    <img src="/images/certi-1.png" alt="certification" />
                    <img src="/images/certi-1.png" alt="certification" />
                </div>
                <Button text="See Detail">
                    <i className="bi bi-arrow-up-right"></i>
                </Button>
            </div>
        )
    } else if (stack) {
        component = (
            <div className='componentView'>
                <TechCard image="/images/html.png" />
                <TechCard image="/images/css.png" />
                <TechCard image="/images/js.png" />
                <TechCard image="/images/gcp.png" />
                <TechCard image="/images/react.png" />
            </div>
        )
    }

    return (
        <div className="portofoliopage" ref={portofolio}>
            <Title text="Portofolio" width="180px" />
            <div className="buttonWrap">
                <button onClick={ () => { 
                    setProjects(true);
                    setCertification(false);
                    setStack(false); 
                }}>
                    <i className="bi bi-gear"></i>
                    <p>Projects</p>
                </button>
                <button onClick={ () => {
                    setProjects(false);
                    setCertification(true);
                }}>
                    <i className="bi bi-trophy"></i>
                    <p>Certification</p>
                </button>
                <button onClick={ () => {
                    setCertification(false);
                    setStack(true);
                }}>
                    <i className="bi bi-stack"></i>
                    <p>Tech Stack</p>
                </button>
            </div>
            {component}
        </div>
    )
}