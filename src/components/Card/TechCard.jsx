import './Techcard.css'

export default function TechCard({image}) {
    return (
        <div className='tech-card'>
            <img src={image} alt="foto" />
        </div>
    )
}