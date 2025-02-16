import './Title.css'

export default function Title({ text, width }) {
    return (
        <div>
            <h3 className="title">{text}</h3>
            <div className="line" style={{ width: width }}></div>
        </div>
    )
}