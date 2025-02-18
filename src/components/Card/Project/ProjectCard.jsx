import Button from '../../Button/Button'
import './ProjectCard.css'

export default function ProjectCard({ image, tittle, description }) {
    return (
        <div className='card-project-wrapper'>
            <img src={image} alt="gambar" className='image-porto'/>
            <h5 style={{ fontSize: "20px" }}>{tittle}</h5>
            <p style={{ width: "380px", textAlign: "justify" }}>{description}</p>
            <Button text="See Detail" />
        </div>
    )
}