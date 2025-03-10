import { useContext } from 'react';
import './AboutCard.css'
import { NavigationContext } from '../../../contexts/NavigationContext';

export default function AboutCard({ number, title, icon, stack, certification, project, index }) {
    const { portofolio, setProjects, setCertification, setStack, buttonRef } = useContext(NavigationContext);

    const handleCLick = (page) => {
        page.current.scrollIntoView({ behavior: "smooth" });
        setProjects(project);
        setCertification(certification);
        setStack(stack);

        buttonRef.current.forEach((btn, idx) => {
            if (btn) btn.style.background = idx === index ? "rgba(255, 255, 255, 0.5)" : "transparent";
        });
    }

    return (
        <div className='aboutcard'>
            <div className="card-content">
                <i className={icon}></i>
                <h5>{title}</h5>
                <div className="about-text-wrap">
                    <a onClick={() => handleCLick(portofolio)}>See Detail <i className="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
            <p>{number}</p>
        </div>
    )
}