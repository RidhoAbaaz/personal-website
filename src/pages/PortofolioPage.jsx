// import CertificationCard from '../components/Card/CertificationCard'
import { useContext } from 'react'
import TechCard from '../components/Card/TechCard'
import Title from '../components/Title/Title'
import './PortofolioPage.css'
import { NavigationContext } from '../contexts/NavigationContext'
// import ProjectCard from '../components/Card/ProjectCard'

export default function PortofolioPage() {
    const { portofolio } = useContext(NavigationContext);
    return (
        <div className="portofoliopage" ref={portofolio}>
            <Title text="Portofolio" width="180px" />
            <nav>
                <ul className='portofolio-nav'>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Certification</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Tech Stack</a></li>
                </ul>
            </nav>
            <TechCard image="/images/css.png" />
        </div>
    )
}