import './CertificationCard.css'

export default function CertificationCard({ image }) {
    return (
        <div className='certification-card'>
            <img src={image} alt="image" />
            <button>See Details</button>
        </div>
    )
}