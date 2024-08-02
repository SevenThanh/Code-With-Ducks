import placeholder from "./assets/placeholder.svg"
import "./styles/Card.css"

export function Card({ title, text, img="", right=false }) {
    let image
    try {
        image = require(img)
    } catch (error) {
        image = placeholder
    }

    return (
        <div className={`card-wrapper${right ? " right" : ""}`}>
            <h1 className="card-title">{title}</h1>
            <main className="card-main">
                <img src={image} alt="" />
                <p>{text}</p>
            </main>
        </div>
    )
}
