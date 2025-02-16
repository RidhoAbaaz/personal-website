import './Navbar.css'

export default function Navbar({ homePage, aboutPage, skillPage, portofolioPage, contactPage }) {

    const handleCLick = (page) => {
        page.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav>
            <ul className="navbar-list">
                <li><a onClick={() => handleCLick(homePage)}>Home</a></li>
                <li><a onClick={() => handleCLick(aboutPage)}>About Me</a></li>
                <li><a onClick={() => handleCLick(skillPage)}>Skills</a></li>
                <li><a onClick={() => handleCLick(portofolioPage)}>Portofolio</a></li>
                <li><a onClick={() => handleCLick(contactPage)}>Contact</a></li>
            </ul>
        </nav>
    )
}