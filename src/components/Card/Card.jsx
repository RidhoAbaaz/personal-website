import './Card.css'

export default function Card({ title, description, image }) {
    return (
        <div className='card'>
            <img src={image} alt="logo" />
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}