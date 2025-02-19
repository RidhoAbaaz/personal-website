import { useContext } from 'react';
import './Navbar.css'
import { NavigationContext } from '../../contexts/NavigationContext';

export default function Navbar() {
    const { home, about, skill, portofolio, contact } = useContext(NavigationContext)
    const handleCLick = (page) => page.current.scrollIntoView({ behavior: "smooth" });

    return (
        <nav>
            <ul className="navbar-list">
                <li><a onClick={() => handleCLick(home)}>Home</a></li>
                <li><a onClick={() => handleCLick(about)}>About Me</a></li>
                <li><a onClick={() => handleCLick(skill)}>Skills</a></li>
                <li><a onClick={() => handleCLick(portofolio)}>Portofolio</a></li>
                <li><a onClick={() => handleCLick(contact)}>Contact</a></li>
            </ul>
        </nav>
    )
}