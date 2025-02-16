import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import './HomePage.css'

export default function HomePage() {
    return (
        <section className="homepage">
            <div className="wrapper-1">
                <h5 className="logo">RIDHO</h5>
                <Navbar />
            </div>
            <div className="wrapper-2">
                <div className="text-wrapper">
                    <p className="name-info">I am Ridho Abdul Aziz</p>
                    <p className="job-info">Informatic Student</p>
                    <Button text="Contact Me" />
                </div>
                <div className="icon-wrapper">
                    <ul>
                        <li><a href=""><i className="bi bi-instagram"></i></a></li>
                        <li><a href=""><i className="bi bi-linkedin"></i></a></li>
                        <li><a href=""><i className="bi bi-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}