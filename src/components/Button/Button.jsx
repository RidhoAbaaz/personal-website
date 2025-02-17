import './Button.css'

export default function Button({ text, page, children }) {
    const handleClick = (page) => page.current.scrollIntoView({ behavior: "smooth" });
    return (
        <>
            <button className="button" onClick={() => handleClick(page)}>{ text } {children}</button>
        </>
    )
}