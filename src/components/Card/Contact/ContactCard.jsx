import './ContactCard.css'

export default function ContactCard({ children, content }) {
    return (
        <div className='card-wrapper'>
            {children}
            <p>{content}</p>
        </div>
    )
}