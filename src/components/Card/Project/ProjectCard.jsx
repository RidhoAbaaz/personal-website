import './ProjectCard.css'

export default function ProjectCard({ image, tittle, description, link, children }) {
    return (
        <div className='card-project-wrapper'>
            <img src={image} alt="gambar" className='image-porto'/>
            <h5 style={{ fontSize: "15px" }}>{tittle}</h5>
            <p style={{ width: "380px", textAlign: "justify", fontSize: "12px" }}>{description}</p>
            <div className="techWrap">
                {children}
            </div>
            <a href={link} target='_blank'>See Detail <i className="bi bi-arrow-up-right"></i></a>
        </div>
    )
}