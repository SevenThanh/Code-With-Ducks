import placeholder from "./assets/placeholder.svg";
import "./styles/Card.css";

export function Card({ title, text, img = placeholder, right = false }) {
    return (
        <div className={`card-wrapper${right ? " right" : ""}`}>
            <h1 className="card-title">{title}</h1>
            <main className="card-main">
                <img src={img} alt={title} />
                <p>{text}</p>
            </main>
        </div>
    );
}
