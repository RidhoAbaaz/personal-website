import './AboutCard.css'

export default function AboutCard({ children, number, title }) {
    return (
        <div className='aboutcard'>
            <div className="card-content">
                <h5>{title}</h5>
                <div className="button-wrap">
                    {children}
                </div>
            </div>
            <p>{number}</p>
        </div>
    )
}