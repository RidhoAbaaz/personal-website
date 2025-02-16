import { useContext } from "react";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import './HomePage.css'
import { NavigationContext } from "../contexts/NavigationContext";

export default function HomePage() {
    const { home, about, skill, portofolio, contact } = useContext(NavigationContext)
    return (
        <section className="homepage" ref={home}>
            <div className="wrapper-1">
                <h5 className="logo">RIDHO</h5>
                <Navbar homePage={home} aboutPage={about} skillPage={skill} portofolioPage={portofolio} contactPage={contact}/>
            </div>
            <div className="wrapper-2">
                <div className="text-wrapper">
                    <p className="name-info">I am Ridho Abdul Aziz</p>
                    <p className="job-info">Informatic Student</p>
                    <Button text="Contact Me" />
                </div>
                <div className="icon-wrapper">
                    <ul>
                        <li><a href="https://www.instagram.com/ridhoabdull_/" target="_blank"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ridho-abdul-aziz-509b43303/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/RidhoAbaaz/" target="_blank"><i className="bi bi-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}