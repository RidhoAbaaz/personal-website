import './Validate.css'

export default function Validate({ text }) {
    return (
        <div className="validator">
            <i className="bi bi-exclamation-octagon"></i>
            <p>{ text }</p>
        </div>
    )
}