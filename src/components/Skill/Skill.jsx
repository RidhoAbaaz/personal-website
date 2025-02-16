import './Skill.css'

export default function Skill({ text }) {
    return (
        <div className='skill-wrapper'>
            <h5>{text}</h5>
            <div className="progress-wrapper">
                <div className="progress"></div>
                <p>100%</p>
            </div>
        </div>
    )
}