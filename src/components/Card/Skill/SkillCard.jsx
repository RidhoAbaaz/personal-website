import './SkillCard.css'

export default function SkillCard({ icon, title, text, children }) {
    return (
        <div className='skillCard'>
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{text}</p>
            <div className="techWrap">
                {children}
            </div>
        </div>
    )
}