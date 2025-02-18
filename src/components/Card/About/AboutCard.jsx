import './AboutCard.css'

export default function AboutCard({ number, title, icon, ref }) {

    const handleCLick = (page) => page.current.scrollIntoView({ behavior: "smooth" });

    return (
        <div className='aboutcard'>
            <div className="card-content">
                <i className={icon}></i>
                <h5>{title}</h5>
                <div className="about-text-wrap">
                    <a onClick={() => handleCLick(ref)}>See Detail <i className="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
            <p>{number}</p>
        </div>
    )
}